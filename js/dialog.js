'use strict';

window.REPTILIA = window.REPTILIA || {};

window.REPTILIA.UI = {
  showScreen(id) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    const next = document.getElementById(id);
    if (next) next.classList.add('active');
  },

  toast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = 'block';
    toast.classList.remove('pop-in');
    void toast.offsetWidth;
    toast.classList.add('pop-in');
    window.clearTimeout(this._toastTimer);
    this._toastTimer = window.setTimeout(() => {
      toast.style.display = 'none';
      toast.classList.remove('pop-in');
    }, 2400);
  },

  transition(done) {
    const overlay = document.getElementById('transitionOverlay');
    if (!overlay) {
      done();
      return;
    }
    overlay.classList.add('active');
    window.setTimeout(() => {
      done();
      overlay.classList.remove('active');
    }, 250);
  },

  safeHtml(html) {
    return String(html || '').replace(/\n/g, '<br>');
  }
};
