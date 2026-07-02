'use strict';

window.REPTILIA = window.REPTILIA || {};

window.REPTILIA.ACHIEVEMENTS = [
  { id: 'first_zone', title: 'Primeira Expedição', desc: 'Complete sua primeira zona.', test: s => s.completedZones.length >= 1 },
  { id: 'perfect_zone', title: 'Resposta Perfeita', desc: 'Faça 100% de acertos em uma zona.', test: s => s.perfectZones >= 1 },
  { id: 'three_zones', title: 'Explorador de Campo', desc: 'Complete 3 zonas do mapa.', test: s => s.completedZones.length >= 3 },
  { id: 'half_map', title: 'Meio Caminho', desc: 'Complete 6 zonas do mapa.', test: s => s.completedZones.length >= 6 },
  { id: 'all_zones', title: 'Mestre Reptiliano', desc: 'Complete todas as zonas.', test: s => s.completedZones.length >= window.REPTILIA.ZONES.length },
  { id: 'npc_scholar', title: 'Aluno Curioso', desc: 'Converse com todos os NPCs do mapa.', test: s => s.talkedNpcs.length >= (window.REPTILIA.MapEngine?.npcs.length || 8) },
  { id: 'hundred_correct', title: 'Turma Forte', desc: 'Some 15 acertos em quizzes.', test: s => s.correctAnswers >= 15 },
  { id: 'fifty_correct', title: 'Herpetologo Junior', desc: 'Some 50 acertos em quizzes.', test: s => s.correctAnswers >= 50 },
  { id: 'league_ready', title: 'Pronto para a Liga', desc: 'Desbloqueie a zona final.', test: s => s.completedZones.includes(10) || s.completedZones.includes(12) }
];

window.REPTILIA.Game = {
  state: {
    playerName: 'JOGADOR',
    gender: 'male',
    xp: 0,
    score: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    perfectZones: 0,
    completedZones: [],
    badges: [],
    achievements: [],
    talkedNpcs: [],
    classId: 'turma-reptilia'
  },
  currentZone: null,
  lessonIndex: 0,

  init() {
    this.restore();
    this.bindTitle();
    this.bindName();
    this.bindMap();
    this.bindZone();
    this.bindMenus();
    this.updateHud();
    this.applyScientistVisual();
  },

  bindTitle() {
    const start = () => {
      window.REPTILIA.Audio?.unlock();
      window.REPTILIA.UI.showScreen('screen-name');
    };
    document.getElementById('titleStart')?.addEventListener('click', start);
    document.addEventListener('keydown', event => {
      if (event.key === 'Enter' && document.getElementById('screen-title')?.classList.contains('active')) start();
    });
  },

  bindName() {
    const input = document.getElementById('playerNameInput');
    const classInput = document.getElementById('classCodeInput');
    if (classInput) classInput.value = this.state.classId || 'turma-reptilia';
    document.querySelectorAll('.gender-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.gender-card').forEach(el => el.classList.remove('active'));
        card.classList.add('active');
        this.state.gender = card.dataset.gender || 'male';
        this.applyScientistVisual();
        window.REPTILIA.Audio?.click();
      });
    });
    const confirm = () => {
      this.state.playerName = (input.value || 'JOGADOR').trim().slice(0, 10).toUpperCase();
      this.state.classId = window.REPTILIA.FirebaseService.normalizeClassId(classInput?.value || this.state.classId);
      this.save();
      this.startMap();
    };
    document.getElementById('btnConfirmName')?.addEventListener('click', confirm);
    input?.addEventListener('keydown', event => {
      if (event.key === 'Enter') confirm();
    });
  },

  startMap() {
    window.REPTILIA.UI.transition(() => {
      window.REPTILIA.UI.showScreen('screen-map');
      if (!window.REPTILIA.MapEngine.canvas) {
        window.REPTILIA.MapEngine.init('mapCanvas');
        window.REPTILIA.MapEngine.setupDpad('dpadUp', 'dpadDown', 'dpadLeft', 'dpadRight', 'btnA');
        window.REPTILIA.MapEngine.enterZoneCallback = id => this.enterZone(id);
        window.REPTILIA.MapEngine.talkCallback = npc => this.talkToNpc(npc);
      }
      window.REPTILIA.MapEngine.updatePortalStates(this.state.completedZones);
      this.applyScientistVisual();
      this.updateHud();
    });
  },

  bindMap() {
    document.getElementById('btnStart')?.addEventListener('click', () => this.toggleMenu());
    document.getElementById('btnSelect')?.addEventListener('click', () => this.openReptidex());
    document.getElementById('btnB')?.addEventListener('click', () => this.toggleMenu());
    document.getElementById('btnNpcClose')?.addEventListener('click', () => {
      document.getElementById('npcDialog').style.display = 'none';
    });
  },

  bindZone() {
    document.getElementById('btnBackMap')?.addEventListener('click', () => this.startMap());
    document.getElementById('btnBackMapComplete')?.addEventListener('click', () => this.startMap());
    document.getElementById('btnPrevLesson')?.addEventListener('click', () => this.previousLesson());
    document.getElementById('btnNextLesson')?.addEventListener('click', () => this.nextLesson());
    document.getElementById('btnNextQ')?.addEventListener('click', () => window.REPTILIA.QuizEngine.next());
  },

  bindMenus() {
    document.getElementById('menuPokedex')?.addEventListener('click', () => this.openReptidex());
    document.getElementById('menuAchievements')?.addEventListener('click', () => this.openAchievements());
    document.getElementById('menuRanking')?.addEventListener('click', () => this.openRanking());
    document.getElementById('menuAudio')?.addEventListener('click', event => {
      const enabled = window.REPTILIA.Audio.toggle();
      event.currentTarget.textContent = `SOM: ${enabled ? 'ON' : 'OFF'}`;
    });
    document.getElementById('menuClose')?.addEventListener('click', () => this.toggleMenu(false));
    document.getElementById('btnReptidexBack')?.addEventListener('click', () => this.startMap());
    document.getElementById('btnRankingBack')?.addEventListener('click', () => this.startMap());
    document.getElementById('btnAchievementsBack')?.addEventListener('click', () => this.startMap());
  },

  toggleMenu(force) {
    const menu = document.getElementById('mapMenu');
    if (!menu) return;
    const shouldShow = typeof force === 'boolean' ? force : menu.style.display === 'none';
    menu.style.display = shouldShow ? 'block' : 'none';
  },

  talkToNpc(npc) {
    const talkedCount = this.state.talkedNpcs.filter(id => id === npc.id).length;
    const text = npc.lines[Math.min(talkedCount, npc.lines.length - 1)];
    document.getElementById('npcPortrait').innerHTML = `<img src="${npc.portrait}" alt="${npc.name}">`;
    document.getElementById('npcName').textContent = npc.name;
    document.getElementById('npcText').textContent = text;
    document.getElementById('npcDialog').style.display = 'flex';
    if (!this.state.talkedNpcs.includes(npc.id)) this.state.talkedNpcs.push(npc.id);
    this.checkAchievements();
    this.save();
  },

  enterZone(id) {
    const zone = window.REPTILIA.ZONES.find(item => item.id === id);
    if (!zone) return;
    this.currentZone = zone;
    this.lessonIndex = 0;
    document.getElementById('lessonPanel').style.display = 'flex';
    document.getElementById('quizPanel').style.display = 'none';
    document.getElementById('zoneComplete').style.display = 'none';
    window.REPTILIA.Audio?.click();
    window.REPTILIA.UI.transition(() => {
      window.REPTILIA.UI.showScreen('screen-zone');
      this.renderLesson();
    });
  },

  renderLesson() {
    const lesson = this.currentZone.lessons[this.lessonIndex];
    document.getElementById('lessonSpriteArea')?.setAttribute('data-zone', this.currentZone.id);
    document.getElementById('lessonDialog')?.setAttribute('data-zone', this.currentZone.id);
    document.getElementById('zoneTitleText').textContent = this.currentZone.name;
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonBody').innerHTML = window.REPTILIA.UI.safeHtml(lesson.body);
    document.getElementById('lessonSprite').innerHTML = `<img src="${this.lessonVisual(this.currentZone.id, this.lessonIndex)}" alt="">`;
    document.getElementById('lessonSpeech').textContent = lesson.speech || '';
    document.getElementById('lessonCounter').textContent = `${this.lessonIndex + 1}/${this.currentZone.lessons.length}`;
    document.getElementById('zoneProgFill').style.width = `${((this.lessonIndex + 1) / this.currentZone.lessons.length) * 50}%`;
    document.getElementById('btnPrevLesson').disabled = this.lessonIndex === 0;
    document.getElementById('btnNextLesson').textContent = this.lessonIndex === this.currentZone.lessons.length - 1 ? 'INICIAR QUIZ >' : 'PROXIMO >';
  },

  previousLesson() {
    if (this.lessonIndex > 0) {
      this.lessonIndex -= 1;
      this.renderLesson();
    }
  },

  nextLesson() {
    window.REPTILIA.Audio?.click();
    if (this.lessonIndex < this.currentZone.lessons.length - 1) {
      this.lessonIndex += 1;
      this.addScore(window.REPTILIA.XP.lessonRead);
      this.renderLesson();
      return;
    }
    this.startQuiz();
  },

  startQuiz() {
    document.getElementById('lessonPanel').style.display = 'none';
    document.getElementById('quizPanel').style.display = 'flex';
    document.getElementById('zoneProgFill').style.width = '60%';
    window.REPTILIA.QuizEngine.start(this.currentZone, (correct, total) => this.completeZone(correct, total));
  },

  completeZone(correct, total) {
    document.getElementById('quizPanel').style.display = 'none';
    document.getElementById('zoneComplete').style.display = 'flex';
    document.getElementById('zoneProgFill').style.width = '100%';

    const base = correct * window.REPTILIA.XP.correctAnswer + window.REPTILIA.XP.zoneComplete;
    const perfect = correct === total ? window.REPTILIA.XP.perfectZone : 0;
    const points = base + perfect;
    this.addScore(points);
    this.state.correctAnswers += correct;
    this.state.totalAnswers += total;
    if (correct === total) this.state.perfectZones += 1;

    if (!this.state.completedZones.includes(this.currentZone.id)) this.state.completedZones.push(this.currentZone.id);
    if (!this.state.badges.includes(this.currentZone.id)) this.state.badges.push(this.currentZone.id);

    document.getElementById('completeBadge').innerHTML = `<img class="complete-badge-img" src="${this.zoneIcon(this.currentZone.id)}" alt="">`;
    document.getElementById('completePoints').textContent = points;
    document.getElementById('completeAcc').textContent = `${correct}/${total}`;

    this.checkAchievements();
    this.save();
    this.updateHud();
    window.REPTILIA.FirebaseService.saveScore(this.state.playerName, this.state.score, this.state.completedZones, this.state.badges, {
      correctAnswers: this.state.correctAnswers,
      totalAnswers: this.state.totalAnswers,
      classId: this.state.classId
    });
  },

  addScore(points) {
    this.state.score += points;
    this.state.xp += points;
    this.updateHud();
  },

  checkAchievements() {
    window.REPTILIA.ACHIEVEMENTS.forEach(ach => {
      if (!this.state.achievements.includes(ach.id) && ach.test(this.state)) {
        this.state.achievements.push(ach.id);
        window.REPTILIA.Audio?.achievement();
        window.REPTILIA.UI.toast(`Conquista: ${ach.title}`);
      }
    });
  },

  updateHud() {
    document.getElementById('hudPlayerName').textContent = this.state.playerName;
    document.getElementById('hudScore').textContent = this.state.score;
    document.getElementById('hudXpVal').textContent = this.state.xp;
    document.getElementById('hudXpFill').style.width = `${Math.min(100, (this.state.xp % 1000) / 10)}%`;
    const badges = document.getElementById('hudBadges');
    badges.innerHTML = '';
    this.state.badges.forEach(id => {
      const img = document.createElement('img');
      img.className = 'badge-icon';
      img.src = this.zoneIcon(id);
      img.alt = 'Medalha';
      badges.appendChild(img);
    });
  },

  openReptidex() {
    this.toggleMenu(false);
    window.REPTILIA.Reptidex.render(this.state.completedZones);
    window.REPTILIA.UI.showScreen('screen-reptidex');
  },

  openAchievements() {
    this.toggleMenu(false);
    const list = document.getElementById('achievementsList');
    list.innerHTML = '';
    window.REPTILIA.ACHIEVEMENTS.forEach(ach => {
      const unlocked = this.state.achievements.includes(ach.id);
      const item = document.createElement('div');
      item.className = `achievement-item${unlocked ? ' unlocked' : ''}`;
      item.innerHTML = `
        <span class="achievement-medal">${unlocked ? 'OK' : '??'}</span>
        <span><strong>${ach.title}</strong><br>${ach.desc}</span>
      `;
      list.appendChild(item);
    });
    window.REPTILIA.UI.showScreen('screen-achievements');
  },

  async openRanking() {
    this.toggleMenu(false);
    window.REPTILIA.UI.showScreen('screen-ranking');
    await window.REPTILIA.Ranking.render(this.state.classId);
  },

  applyScientistVisual() {
    const src = this.state.gender === 'female' ? 'assets/img/cientista2.png' : 'assets/img/cientista1.png';
    const professor = document.querySelector('.professor-sprite');
    if (professor) professor.style.backgroundImage = `url("${src}")`;
    const player = document.getElementById('playerSprite');
    if (player) player.style.backgroundImage = `url("${src}")`;
    const trainerPass = document.getElementById('trainerPassAvatar');
    if (trainerPass) trainerPass.innerHTML = `<img src="${src}" alt="Avatar do jogador">`;
    const hudAvatar = document.querySelector('.hud-avatar');
    if (hudAvatar) hudAvatar.innerHTML = `<img src="${src}" alt="Avatar do jogador">`;
    document.querySelectorAll('.gender-card').forEach(card => {
      card.classList.toggle('active', card.dataset.gender === this.state.gender);
    });
  },

  zoneIcon(id) {
    return (window.REPTILIA.ASSET_ICONS || window.REPTILIA.MapEngine?.zoneIcons || {})[id] || 'assets/img/lagarto1.png';
  },

  lessonVisual(zoneId, lessonIndex) {
    const sets = {
      1: ['assets/img/lagarto1.png', 'assets/img/ui_lizard_stamp.png', 'assets/img/ui_sunrock.png', 'assets/img/ui_leaf_cluster.png'],
      2: ['assets/img/tartaruga1.png', 'assets/img/ui_turtle_stamp.png', 'assets/img/crocodilo1.png', 'assets/img/ui_notebook.png'],
      3: ['assets/img/cientista1.png', 'assets/img/ui_notebook.png', 'assets/img/ui_compass.png', 'assets/img/ovo1.png'],
      4: ['assets/img/fossil1.png', 'assets/img/ui_compass.png', 'assets/img/ui_notebook.png', 'assets/img/vulcao1.png'],
      5: ['assets/img/cobra1.png', 'assets/img/guarda1.png', 'assets/img/ui_notebook.png', 'assets/img/ui_sunrock.png'],
      6: ['assets/img/ovo1.png', 'assets/img/ui_notebook.png', 'assets/img/ui_turtle_stamp.png', 'assets/img/cientista2.png'],
      7: ['assets/img/guarda1.png', 'assets/img/ui_leaf_cluster.png', 'assets/img/ui_fern.png', 'assets/img/ui_compass.png'],
      8: ['assets/img/crocodilo1.png', 'assets/img/tartaruga1.png', 'assets/img/ui_turtle_stamp.png', 'assets/img/ui_leaf_cluster.png'],
      9: ['assets/img/guia1.png', 'assets/img/ui_compass.png', 'assets/img/ui_fern.png', 'assets/img/ui_lizard_stamp.png'],
      10: ['assets/img/vulcao1.png', 'assets/img/ui_sunrock.png', 'assets/img/fossil1.png', 'assets/img/ui_compass.png'],
      11: ['assets/img/placa1.png', 'assets/img/ui_notebook.png', 'assets/img/cientista2.png', 'assets/img/ui_sunrock.png'],
      12: ['assets/img/bau1.png', 'assets/img/ui_compass.png', 'assets/img/ui_lizard_stamp.png', 'assets/img/ui_turtle_stamp.png']
    };
    const list = sets[zoneId] || [this.zoneIcon(zoneId)];
    return list[lessonIndex % list.length] || this.zoneIcon(zoneId);
  },

  save() {
    window.REPTILIA.FirebaseService.saveGameState(this.state);
  },

  restore() {
    const saved = window.REPTILIA.FirebaseService.loadGameState();
    if (saved) {
      this.state = {
        ...this.state,
        ...saved,
        achievements: saved.achievements || [],
        talkedNpcs: saved.talkedNpcs || [],
        correctAnswers: saved.correctAnswers || 0,
        totalAnswers: saved.totalAnswers || 0,
        perfectZones: saved.perfectZones || 0,
        gender: saved.gender || 'male',
        classId: saved.classId || 'turma-reptilia'
      };
    }
  }
};

document.addEventListener('DOMContentLoaded', () => window.REPTILIA.Game.init());
