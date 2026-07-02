'use strict';

window.REPTILIA = window.REPTILIA || {};

window.REPTILIA.Reptidex = {
  get icons() {
    return window.REPTILIA.ASSET_ICONS || {
      1: 'assets/img/lagarto1.png',
      2: 'assets/img/tartaruga1.png',
      3: 'assets/img/cientista1.png',
      4: 'assets/img/fossil1.png',
      5: 'assets/img/cobra1.png',
      6: 'assets/img/ovo1.png'
    };
  },

  render(unlockedZones) {
    const list = document.getElementById('reptidexList');
    if (!list) return;
    list.innerHTML = '';
    const total = window.REPTILIA.REPTIDEX.length;
    const caught = window.REPTILIA.REPTIDEX.filter(entry => unlockedZones.includes(entry.zone)).length;
    document.getElementById('reptidexProgress').textContent = `${caught}/${total}`;

    window.REPTILIA.REPTIDEX.forEach((entry, index) => {
      const unlocked = unlockedZones.includes(entry.zone);
      const item = document.createElement('button');
      item.className = `reptidex-entry${unlocked ? '' : ' locked'}`;
      item.innerHTML = `
        <span class="reptidex-entry-icon">${unlocked ? `<img src="${this.icons[entry.zone] || this.icons[1]}" alt="">` : '?'}</span>
        <span class="reptidex-entry-main">
          <span class="reptidex-entry-name">${unlocked ? this._escape(entry.name) : 'BLOQUEADO'}</span>
          <span class="reptidex-entry-zone">Zona ${entry.zone}</span>
        </span>
        <span class="reptidex-entry-num">#${entry.id}</span>
      `;
      item.addEventListener('click', () => this.select(entry, unlocked, item));
      list.appendChild(item);
      if (index === 0) this.select(entry, unlocked, item);
    });
  },

  select(entry, unlocked, item) {
    document.querySelectorAll('.reptidex-entry').forEach(el => el.classList.remove('active'));
    if (item) item.classList.add('active');
    const sprite = document.getElementById('reptidexSprite');
    if (unlocked) sprite.innerHTML = `<img src="${this.icons[entry.zone] || this.icons[1]}" alt="${entry.name}">`;
    else sprite.innerHTML = '<span class="reptidex-mystery">?</span>';
    document.getElementById('rdName').textContent = unlocked ? `${entry.id} - ${entry.name}` : 'ESPECIE BLOQUEADA';
    document.getElementById('rdDesc').textContent = unlocked ? entry.desc : 'Complete a zona correspondente para registrar esta especie.';
    document.getElementById('rdStats').innerHTML = unlocked ? this._statChips(entry.stats) : '<span class="rd-chip locked">Dados indisponiveis</span>';
    document.getElementById('reptidexZoneHint').textContent = unlocked ? `Registro da Zona ${entry.zone}` : `Complete a Zona ${entry.zone}`;
  },

  _statChips(stats) {
    return String(stats || '')
      .split('|')
      .map(item => item.trim())
      .filter(Boolean)
      .map(item => `<span class="rd-chip">${this._escape(item)}</span>`)
      .join('');
  },

  _escape(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};
