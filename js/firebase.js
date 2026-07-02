'use strict';

window.REPTILIA = window.REPTILIA || {};

window.REPTILIA.FirebaseService = {
  _ready: false,
  _online: false,
  _db: null,
  _uid: null,

  init() {
    const check = setInterval(() => {
      if (window._firebaseDb && window._firebaseUid) {
        this._db = window._firebaseDb;
        this._uid = window._firebaseUid;
        this._online = !String(this._uid).startsWith('offline_');
        this._ready = true;
        clearInterval(check);
        console.log('[Firebase] Ready:', this.statusText());
      }
    }, 300);

    setTimeout(() => {
      if (!this._ready) {
        this._ready = true;
        this._online = false;
        this._uid = this.getLocalUid();
        console.warn('[Firebase] Offline ranking mode');
      }
    }, 4500);
  },

  getLocalUid() {
    const key = 'reptilia_local_uid';
    let uid = localStorage.getItem(key);
    if (!uid) {
      uid = `offline_${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem(key, uid);
    }
    return uid;
  },

  normalizeClassId(classId) {
    return String(classId || 'turma-reptilia')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 32) || 'turma-reptilia';
  },

  statusText() {
    return this._online ? 'Ranking online conectado' : 'Ranking local (configure o Firebase para online)';
  },

  isOnline() {
    return this._online;
  },

  async saveScore(playerName, score, zonesCompleted, badges, extra = {}) {
    const classId = this.normalizeClassId(extra.classId);
    const payload = {
      name: playerName,
      score,
      correctAnswers: extra.correctAnswers || 0,
      totalAnswers: extra.totalAnswers || 0,
      accuracy: extra.totalAnswers ? Math.round(((extra.correctAnswers || 0) / extra.totalAnswers) * 100) : 0,
      classId,
      zonesCompleted,
      badges,
      uid: this._uid || this.getLocalUid(),
      updatedAtLocal: Date.now()
    };

    if (!this._ready || !this._db || !this._online) {
      this._saveLocalScore(payload);
      return { online: false };
    }

    try {
      const { doc, setDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
      await setDoc(doc(this._db, 'classes', classId, 'scores', payload.uid), {
        ...payload,
        updatedAt: serverTimestamp()
      }, { merge: true });
      this._saveLocalScore(payload);
      return { online: true };
    } catch (err) {
      console.warn('[Firebase] Save failed, using local ranking:', err);
      this._saveLocalScore(payload);
      return { online: false };
    }
  },

  async getRanking(classId = 'turma-reptilia') {
    const normalizedClass = this.normalizeClassId(classId);
    if (!this._ready || !this._db || !this._online) return this._getLocalRanking(normalizedClass);

    try {
      const { collection, query, orderBy, limit, getDocs } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
      const q = query(
        collection(this._db, 'classes', normalizedClass, 'scores'),
        orderBy('score', 'desc'),
        limit(30)
      );
      const snap = await getDocs(q);
      const results = [];
      snap.forEach(d => results.push({ id: d.id, ...d.data() }));
      return results.length ? results : this._getLocalRanking(normalizedClass);
    } catch (err) {
      console.warn('[Firebase] Ranking failed, using local ranking:', err);
      return this._getLocalRanking(normalizedClass);
    }
  },

  _saveLocalScore(entry) {
    try {
      const key = 'reptilia_scores';
      const all = JSON.parse(localStorage.getItem(key) || '[]');
      const existing = all.findIndex(item => item.uid === entry.uid && item.classId === entry.classId);
      if (existing >= 0) all[existing] = entry;
      else all.push(entry);
      all.sort((a, b) => b.score - a.score);
      localStorage.setItem(key, JSON.stringify(all.slice(0, 100)));
    } catch (e) {
      console.warn('[Ranking] Could not save local score:', e);
    }
  },

  _getLocalRanking(classId) {
    try {
      const all = JSON.parse(localStorage.getItem('reptilia_scores') || '[]');
      return all
        .filter(item => (item.classId || 'turma-reptilia') === classId)
        .sort((a, b) => b.score - a.score)
        .slice(0, 30);
    } catch (e) {
      return [];
    }
  },

  saveGameState(state) {
    try {
      localStorage.setItem('reptilia_state', JSON.stringify(state));
    } catch (e) {}
  },

  loadGameState() {
    try {
      const s = localStorage.getItem('reptilia_state');
      return s ? JSON.parse(s) : null;
    } catch (e) {
      return null;
    }
  },

  clearGameState() {
    try {
      localStorage.removeItem('reptilia_state');
    } catch (e) {}
  }
};

window.REPTILIA.FirebaseService.init();
