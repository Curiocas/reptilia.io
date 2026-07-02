'use strict';

window.REPTILIA = window.REPTILIA || {};

window.REPTILIA.Sprites = {
  init() {
    this.paintTitleSprites();
    this.paintPlayer();
  },

  paintTitleSprites() {
    const sprites = [
      ['.sprite-snake', 'assets/img/lagarto1.png'],
      ['.sprite-dino', 'assets/img/vulcao1.png'],
      ['.sprite-turtle', 'assets/img/tartaruga1.png']
    ];
    sprites.forEach(([selector, src]) => {
      const el = document.querySelector(selector);
      if (!el) return;
      el.innerHTML = `<img src="${src}" alt="">`;
      el.style.display = 'grid';
      el.style.placeItems = 'center';
      el.style.border = '4px solid #081820';
      el.style.borderRadius = '8px';
      el.style.background = 'rgba(248,248,232,.12)';
      el.style.boxShadow = '0 6px 0 rgba(0,0,0,.35)';
      const img = el.querySelector('img');
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      img.style.imageRendering = 'pixelated';
    });
  },

  pixelGradient(selector) {
    if (selector.includes('snake')) return 'linear-gradient(135deg,#3cb371 0 50%,#276f4a 50% 100%)';
    if (selector.includes('dino')) return 'linear-gradient(135deg,#e94560 0 50%,#9b2636 50% 100%)';
    return 'linear-gradient(135deg,#f5a623 0 50%,#3cb371 50% 100%)';
  },

  paintPlayer() {
    const sprite = document.getElementById('playerSprite');
    if (!sprite) return;
    sprite.setAttribute('aria-label', 'Explorador pixel art');
  }
};

document.addEventListener('DOMContentLoaded', () => window.REPTILIA.Sprites.init());
