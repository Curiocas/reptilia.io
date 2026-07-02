'use strict';

window.REPTILIA = window.REPTILIA || {};

window.REPTILIA.MapEngine = {
  canvas: null,
  ctx: null,
  width: 768,
  height: 512,
  tileSize: 16,
  playerX: 432,
  playerY: 262,
  playerDir: 'down',
  moveInterval: null,
  keysHeld: {},
  enterZoneCallback: null,
  talkCallback: null,
  SPEED: 2.7,
  _scale: 1,

  get zoneIcons() {
    return window.REPTILIA.ASSET_ICONS || {
      1: 'assets/img/lagarto1.png',
      2: 'assets/img/tartaruga1.png',
      3: 'assets/img/cientista1.png',
      4: 'assets/img/fossil1.png',
      5: 'assets/img/cobra1.png',
      6: 'assets/img/ovo1.png',
      7: 'assets/img/guarda1.png',
      8: 'assets/img/crocodilo1.png',
      9: 'assets/img/guia1.png',
      10: 'assets/img/vulcao1.png'
    };
  },

  npcs: [
    { id: 'prof-rex', name: 'Prof. Rex', x: 112, y: 120, portrait: 'assets/img/cientista1.png', lines: ['Repare nas escamas: elas tem queratina, reduzem a perda de agua e protegem o corpo.', 'Repteis sao ectotermicos. Eles usam sol, sombra e postura para controlar a temperatura.'] },
    { id: 'dra-lia', name: 'Dra. Lia', x: 448, y: 132, portrait: 'assets/img/cientista2.png', lines: ['Tartarugas, lagartos, serpentes e crocodilianos mostram como o grupo dos repteis e diverso.', 'O ovo amniotico foi decisivo: o embriao ganhou protecao e nao dependeu mais da agua externa.'] },
    { id: 'guarda-lago', name: 'Guarda do Lago', x: 282, y: 252, portrait: 'assets/img/guarda1.png', lines: ['Agua bloqueia sua passagem aqui. No mundo real, cada especie tem adaptacoes ao seu habitat.', 'Matas ciliares protegem rios, ninhos e locais de termorregulacao.'] },
    { id: 'guia-campo', name: 'Guia de Campo', x: 86, y: 282, portrait: 'assets/img/guia1.png', lines: ['Olhe de longe: comportamento natural aparece quando o animal nao se sente ameacado.', 'Camuflagem, postura e movimentos de cabeca tambem sao comunicacao.'] },
    { id: 'ribeirinho', name: 'Morador do Rio', x: 255, y: 205, portrait: 'assets/img/crocodilo1.png', lines: ['Jacares fazem parte do equilibrio de rios e lagoas. Eles nao sao viloes.', 'No Pantanal, areas alagadas sustentam uma rede enorme de especies.'] },
    { id: 'paleontologa', name: 'Paleontologa', x: 338, y: 382, portrait: 'assets/img/fossil1.png', lines: ['Fosseis sao pistas. Ossos, pegadas e ovos ajudam a reconstruir parentescos.', 'Aves modernas guardam uma historia evolutiva ligada aos dinossauros teropodes.'] },
    { id: 'brigadista', name: 'Brigadista', x: 666, y: 126, portrait: 'assets/img/guarda1.png', lines: ['Queimadas destroem abrigos, ninhos e rotas de fuga.', 'Conservacao tambem e prevencao: proteger habitat antes do problema crescer.'] },
    { id: 'pesquisadora', name: 'Pesquisadora', x: 650, y: 404, portrait: 'assets/img/cientista2.png', lines: ['O amnio, o corio, o alantoide e o saco vitelinico formam um kit de sobrevivencia embrionaria.', 'A reproducao terrestre dos amniotas mudou a historia dos vertebrados.'] },
    { id: 'aluno-liga', name: 'Aluno da Liga', x: 395, y: 306, portrait: 'assets/img/estudante1.png', lines: ['Estou tentando subir no ranking da turma. O segredo e revisar a explicacao depois de errar.', 'Quando voce completa zonas, ganha pontos, medalhas e entradas novas na Reptidex.'] }
  ],

  decorations: [
    ['assets/img/arvore1.png', 72, 76], ['assets/img/arvore1.png', 195, 88], ['assets/img/arvore1.png', 584, 86],
    ['assets/img/arvore1.png', 690, 166], ['assets/img/arvore1.png', 88, 372], ['assets/img/arvore1.png', 438, 420],
    ['assets/img/palmeira1.png', 522, 338], ['assets/img/palmeira1.png', 608, 358], ['assets/img/palmeira1.png', 702, 412],
    ['assets/img/arbusto1.png', 188, 150], ['assets/img/arbusto1.png', 472, 155], ['assets/img/arbusto1.png', 54, 246],
    ['assets/img/arbusto1.png', 286, 330], ['assets/img/arbusto1.png', 625, 220], ['assets/img/pedra1.png', 170, 420],
    ['assets/img/pedra1.png', 334, 388], ['assets/img/pedra1.png', 720, 118], ['assets/img/placa1.png', 455, 242],
    ['assets/img/placa1.png', 128, 198], ['assets/img/bau1.png', 708, 462]
  ],

  colors: {
    grass: '#5fa044',
    grass2: '#77b957',
    path: '#c8a060',
    path2: '#a47c40',
    water: '#2878b8',
    water2: '#58a8e8',
    sand: '#d8c078',
    tree: '#2f6b25',
    tree2: '#174215',
    rock: '#858585',
    rock2: '#5b5b5b',
    lava: '#e84a19',
    lava2: '#ffb11f',
    swamp: '#47764a',
    flower: '#e878a8'
  },

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this._fitCanvas();
    window.addEventListener('resize', () => this._fitCanvas());
    this._buildMap();
    this._renderMap();
    this._placePortals();
    this._placeNpcs();
    this._placeDecorations();
    this._updatePlayerPos();
    document.addEventListener('keydown', e => this._onKeyDown(e));
    document.addEventListener('keyup', e => this._onKeyUp(e));
    this.moveInterval = setInterval(() => this._movePlayer(), 1000 / 60);
  },

  _fitCanvas() {
    const wrap = document.getElementById('mapWrap');
    if (!wrap) return;
    this._scale = Math.min(wrap.clientWidth / this.width, wrap.clientHeight / this.height);
    this.canvas.style.width = `${this.width * this._scale}px`;
    this.canvas.style.height = `${this.height * this._scale}px`;
    this._rescaleOverlays();
  },

  _buildMap() {
    const W = Math.ceil(this.width / this.tileSize);
    const H = Math.ceil(this.height / this.tileSize);
    this._mapW = W;
    this._mapH = H;
    this._map = Array.from({ length: H }, () => Array.from({ length: W }, () => 'GRASS'));
    const rect = (x1, y1, x2, y2, tile) => {
      for (let y = y1; y <= y2; y++) for (let x = x1; x <= x2; x++) if (this._map[y]?.[x]) this._map[y][x] = tile;
    };
    const tile = (x, y, name) => { if (this._map[y]?.[x]) this._map[y][x] = name; };

    rect(0, 0, W - 1, 0, 'ROCK');
    rect(0, H - 1, W - 1, H - 1, 'ROCK');
    rect(0, 0, 0, H - 1, 'TREE');
    rect(W - 1, 0, W - 1, H - 1, 'TREE');
    rect(16, 10, 23, 16, 'WATER');
    rect(17, 11, 22, 15, 'WATER2');
    rect(31, 21, 38, 29, 'SAND');
    rect(41, 3, 47, 10, 'ROCK2');
    rect(43, 4, 46, 8, 'LAVA');
    rect(3, 13, 7, 19, 'SWAMP');
    rect(9, 24, 15, 30, 'ROCK2');
    rect(37, 24, 46, 31, 'GRASS');

    for (let x = 5; x < 44; x++) tile(x, 16, 'PATH');
    for (let y = 5; y < 29; y++) tile(24, y, 'PATH');
    for (let x = 5; x < 25; x++) tile(x, 7, 'PATH');
    for (let x = 24; x < 44; x++) tile(x, 26, 'PATH');
    for (let y = 5; y < 17; y++) tile(40, y, 'PATH');
    for (let y = 16; y < 30; y++) tile(9, y, 'PATH');
    for (let x = 10; x < 25; x++) tile(x, 22, 'PATH');

    [[6,5],[7,5],[8,6],[12,4],[13,4],[35,5],[36,5],[37,6],[4,24],[5,25],[6,26],[28,3],[29,4],[30,4],[44,18],[45,18],[46,19],[18,28],[19,28],[20,29]].forEach(([x,y]) => tile(x,y,'TREE'));
    [[8,9],[14,9],[27,12],[31,14],[33,17],[12,20],[30,24],[41,22],[43,28],[6,18]].forEach(([x,y]) => tile(x,y,'FLOWER'));

    this._blocked = new Set(['WATER', 'WATER2', 'TREE', 'ROCK', 'ROCK2', 'LAVA']);
    this._solidRects = [
      { x: 82, y: 72, w: 70, h: 48 },
      { x: 398, y: 52, w: 78, h: 52 },
      { x: 112, y: 356, w: 72, h: 48 },
      { x: 554, y: 326, w: 76, h: 52 },
      { x: 350, y: 236, w: 58, h: 42 },
      { x: 616, y: 92, w: 64, h: 46 }
    ];
  },

  _renderMap() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (let y = 0; y < this._mapH; y++) {
      for (let x = 0; x < this._mapW; x++) this._drawTile(x, y, this._map[y][x]);
    }
    this._drawRiverBank();
    this._drawHouse(82, 72, '#b84b35');
    this._drawHouse(398, 52, '#4a7fc0');
    this._drawHouse(112, 356, '#7f5aa8');
    this._drawHouse(554, 326, '#c07f35');
    this._drawLab(350, 236);
    this._drawHouse(616, 92, '#3e9b60');
    this._drawFence(188, 82, 122, 34);
    this._drawFence(478, 238, 128, 32);
    this._drawVolcano(675, 42);
    this._drawBridge(264, 192);
    window.REPTILIA.ZONES.forEach(zone => this._drawZoneMarker(zone));
  },

  _drawTile(x, y, kind) {
    const ctx = this.ctx;
    const c = this.colors;
    const ts = this.tileSize;
    const px = x * ts;
    const py = y * ts;
    const fill = {
      GRASS: c.grass,
      PATH: c.path,
      WATER: c.water,
      WATER2: c.water2,
      SAND: c.sand,
      TREE: '#4b8737',
      ROCK: c.rock,
      ROCK2: c.rock2,
      LAVA: c.lava,
      SWAMP: c.swamp,
      FLOWER: c.grass
    }[kind] || c.grass;
    ctx.fillStyle = fill;
    ctx.fillRect(px, py, ts, ts);
    if (kind === 'GRASS' && (x + y) % 2 === 0) {
      ctx.fillStyle = c.grass2;
      ctx.fillRect(px + 3, py + 4, 5, 2);
      ctx.fillRect(px + 10, py + 11, 3, 2);
    }
    if (kind === 'PATH') {
      ctx.fillStyle = c.path2;
      ctx.fillRect(px + 2, py + 2, 2, 2);
      ctx.fillRect(px + 11, py + 9, 3, 2);
    }
    if (kind === 'WATER' || kind === 'WATER2') {
      ctx.fillStyle = c.water2;
      ctx.fillRect(px + 2, py + 5, 12, 2);
      ctx.fillRect(px + 5, py + 11, 8, 2);
    }
    if (kind === 'TREE') {
      ctx.fillStyle = c.tree2;
      ctx.fillRect(px + 3, py + 8, 10, 7);
      ctx.fillStyle = c.tree;
      ctx.fillRect(px + 2, py + 2, 12, 9);
      ctx.fillStyle = '#7a5432';
      ctx.fillRect(px + 6, py + 11, 4, 5);
    }
    if (kind === 'FLOWER') {
      ctx.fillStyle = c.flower;
      ctx.fillRect(px + 6, py + 5, 4, 4);
      ctx.fillStyle = '#fff083';
      ctx.fillRect(px + 7, py + 6, 2, 2);
    }
    if (kind === 'LAVA') {
      ctx.fillStyle = c.lava2;
      ctx.fillRect(px + 4, py + 3, 5, 8);
      ctx.fillRect(px + 10, py + 8, 3, 4);
    }
    if (kind === 'SWAMP') {
      ctx.fillStyle = '#2f5c34';
      ctx.fillRect(px + 4, py + 4, 8, 3);
      ctx.fillRect(px + 2, py + 11, 12, 2);
    }
  },

  _drawRiverBank() {
    const ctx = this.ctx;
    ctx.strokeStyle = '#d8c078';
    ctx.lineWidth = 3;
    ctx.strokeRect(254, 158, 132, 116);
  },

  _drawBridge(x, y) {
    const ctx = this.ctx;
    ctx.fillStyle = '#8b5a2b';
    ctx.fillRect(x, y, 96, 20);
    ctx.fillStyle = '#c08a45';
    for (let i = 0; i < 96; i += 12) ctx.fillRect(x + i, y, 5, 20);
    ctx.fillStyle = '#5d3518';
    ctx.fillRect(x, y + 3, 96, 3);
    ctx.fillRect(x, y + 14, 96, 3);
  },

  _drawHouse(x, y, roof) {
    const ctx = this.ctx;
    ctx.fillStyle = roof;
    ctx.fillRect(x + 7, y, 56, 18);
    ctx.fillStyle = '#7a2e28';
    ctx.fillRect(x, y + 13, 70, 9);
    ctx.fillStyle = '#d8b46c';
    ctx.fillRect(x + 8, y + 22, 54, 30);
    ctx.fillStyle = '#4a3524';
    ctx.fillRect(x + 28, y + 34, 14, 18);
    ctx.fillStyle = '#7fd8ff';
    ctx.fillRect(x + 14, y + 30, 10, 9);
    ctx.fillRect(x + 48, y + 30, 10, 9);
  },

  _drawLab(x, y) {
    const ctx = this.ctx;
    ctx.fillStyle = '#e9e2cf';
    ctx.fillRect(x, y + 12, 58, 34);
    ctx.fillStyle = '#5d6d7e';
    ctx.fillRect(x + 10, y, 38, 16);
    ctx.fillStyle = '#62c7d9';
    ctx.fillRect(x + 8, y + 22, 12, 9);
    ctx.fillRect(x + 38, y + 22, 12, 9);
    ctx.fillStyle = '#3a2a1c';
    ctx.fillRect(x + 23, y + 31, 12, 15);
  },

  _drawFence(x, y, w, h) {
    const ctx = this.ctx;
    ctx.fillStyle = '#885c30';
    for (let px = x; px < x + w; px += 12) ctx.fillRect(px, y, 4, h);
    ctx.fillRect(x, y + 8, w, 4);
    ctx.fillRect(x, y + h - 10, w, 4);
  },

  _drawVolcano(x, y) {
    const ctx = this.ctx;
    ctx.fillStyle = '#5b371f';
    ctx.fillRect(x + 10, y + 28, 58, 36);
    ctx.fillStyle = '#7a4a25';
    ctx.fillRect(x + 22, y + 10, 34, 32);
    ctx.fillStyle = '#ef3b16';
    ctx.fillRect(x + 33, y + 13, 12, 42);
    ctx.fillStyle = '#ffb11f';
    ctx.fillRect(x + 36, y + 2, 10, 10);
  },

  _drawZoneMarker(zone) {
    const ctx = this.ctx;
    ctx.fillStyle = zone.color || '#f5a623';
    ctx.globalAlpha = 0.22;
    ctx.beginPath();
    ctx.arc(zone.mapX, zone.mapY, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  },

  _placePortals() {
    const wrap = document.getElementById('mapWrap');
    wrap.querySelectorAll('.zone-btn-wrap').forEach(el => el.remove());
    window.REPTILIA.ZONES.forEach(zone => {
      const button = document.createElement('button');
      button.className = 'zone-btn-wrap';
      button.dataset.zone = zone.id;
      button.title = zone.name;
      button.innerHTML = `
        <img class="zone-icon" src="${this.zoneIcons[zone.id] || this.zoneIcons[1]}" alt="${zone.shortName || zone.name}">
        <span class="zone-name-tag">${zone.shortName || `Zona ${zone.id}`}</span>
      `;
      button.addEventListener('click', () => this.enterZoneCallback?.(zone.id));
      wrap.appendChild(button);
    });
    this._rescaleOverlays();
  },

  _placeNpcs() {
    const wrap = document.getElementById('mapWrap');
    wrap.querySelectorAll('.npc-map').forEach(el => el.remove());
    this.npcs.forEach(npc => {
      const button = document.createElement('button');
      button.className = 'npc-map';
      button.dataset.npc = npc.id;
      button.title = npc.name;
      button.innerHTML = `<img src="${npc.portrait}" alt="${npc.name}">`;
      button.addEventListener('click', () => this.talkCallback?.(npc));
      wrap.appendChild(button);
    });
    this._rescaleOverlays();
  },

  _placeDecorations() {
    const wrap = document.getElementById('mapWrap');
    wrap.querySelectorAll('.decor-map').forEach(el => el.remove());
    this.decorations.forEach(([src, x, y], index) => {
      const div = document.createElement('div');
      div.className = 'decor-map';
      div.dataset.decor = String(index);
      div.innerHTML = `<img src="${src}" alt="">`;
      wrap.appendChild(div);
    });
    this._rescaleOverlays();
  },

  _rescaleOverlays() {
    const wrap = document.getElementById('mapWrap');
    if (!wrap || !this.canvas) return;
    const cRect = this.canvas.getBoundingClientRect();
    const wRect = wrap.getBoundingClientRect();
    const offsetX = cRect.left - wRect.left;
    const offsetY = cRect.top - wRect.top;
    const scale = this._scale || 1;
    wrap.querySelectorAll('.zone-btn-wrap').forEach(el => {
      const zone = window.REPTILIA.ZONES.find(z => z.id === Number(el.dataset.zone));
      if (!zone) return;
      el.style.left = `${offsetX + zone.mapX * scale}px`;
      el.style.top = `${offsetY + zone.mapY * scale}px`;
    });
    wrap.querySelectorAll('.npc-map').forEach(el => {
      const npc = this.npcs.find(n => n.id === el.dataset.npc);
      if (!npc) return;
      el.style.left = `${offsetX + npc.x * scale}px`;
      el.style.top = `${offsetY + npc.y * scale}px`;
    });
    wrap.querySelectorAll('.decor-map').forEach(el => {
      const decor = this.decorations[Number(el.dataset.decor)];
      if (!decor) return;
      el.style.left = `${offsetX + decor[1] * scale}px`;
      el.style.top = `${offsetY + decor[2] * scale}px`;
    });
    this._updatePlayerPos();
  },

  _onKeyDown(e) {
    this.keysHeld[e.key] = true;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Enter'].includes(e.key)) e.preventDefault();
    if (e.key === 'Enter') this._tryInteract();
  },

  _onKeyUp(e) {
    this.keysHeld[e.key] = false;
    document.getElementById('playerSprite')?.classList.remove('walk-left', 'walk-right', 'walk-up', 'walk-down');
  },

  setupDpad(upId, downId, leftId, rightId, aId) {
    const hold = (id, key) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener('pointerdown', event => {
        event.preventDefault();
        this.keysHeld[key] = true;
        this._stepOnce(key);
      });
      btn.addEventListener('pointerup', event => {
        event.preventDefault();
        this.keysHeld[key] = false;
      });
      btn.addEventListener('pointercancel', () => { this.keysHeld[key] = false; });
      btn.addEventListener('pointerleave', () => { this.keysHeld[key] = false; });
    };
    hold(upId, 'ArrowUp');
    hold(downId, 'ArrowDown');
    hold(leftId, 'ArrowLeft');
    hold(rightId, 'ArrowRight');
    document.getElementById(aId)?.addEventListener('click', () => this._tryInteract());
  },

  _stepOnce(key) {
    const distance = 8;
    const dx = key === 'ArrowLeft' ? -distance : key === 'ArrowRight' ? distance : 0;
    const dy = key === 'ArrowUp' ? -distance : key === 'ArrowDown' ? distance : 0;
    if (!dx && !dy) return;
    const nx = Math.max(10, Math.min(this.width - 10, this.playerX + dx));
    const ny = Math.max(10, Math.min(this.height - 10, this.playerY + dy));
    if (this._canMoveTo(nx, this.playerY)) this.playerX = nx;
    if (this._canMoveTo(this.playerX, ny)) this.playerY = ny;
    if (dx < 0) this.playerDir = 'left';
    else if (dx > 0) this.playerDir = 'right';
    else if (dy < 0) this.playerDir = 'up';
    else this.playerDir = 'down';
    document.getElementById('playerSprite')?.classList.add(`walk-${this.playerDir}`);
    this._updatePlayerPos();
  },

  _movePlayer() {
    let dx = 0;
    let dy = 0;
    if (this.keysHeld.ArrowUp || this.keysHeld.w || this.keysHeld.W) dy -= this.SPEED;
    if (this.keysHeld.ArrowDown || this.keysHeld.s || this.keysHeld.S) dy += this.SPEED;
    if (this.keysHeld.ArrowLeft || this.keysHeld.a || this.keysHeld.A) dx -= this.SPEED;
    if (this.keysHeld.ArrowRight || this.keysHeld.d || this.keysHeld.D) dx += this.SPEED;
    if (!dx && !dy) return;

    const nx = Math.max(8, Math.min(this.width - 8, this.playerX + dx));
    const ny = Math.max(8, Math.min(this.height - 8, this.playerY + dy));
    if (this._canMoveTo(nx, this.playerY)) this.playerX = nx;
    if (this._canMoveTo(this.playerX, ny)) this.playerY = ny;

    if (dx < 0) this.playerDir = 'left';
    else if (dx > 0) this.playerDir = 'right';
    else if (dy < 0) this.playerDir = 'up';
    else this.playerDir = 'down';
    const sprite = document.getElementById('playerSprite');
    if (sprite) {
      sprite.classList.remove('walk-left', 'walk-right', 'walk-up', 'walk-down');
      sprite.classList.add(`walk-${this.playerDir}`);
    }
    this._updatePlayerPos();
  },

  _canMoveTo(x, y) {
    const half = 10;
    const samples = [[x - half, y - half], [x + half, y - half], [x - half, y + half], [x + half, y + half]];
    const tileBlocked = samples.some(([sx, sy]) => {
      const tx = Math.floor(sx / this.tileSize);
      const ty = Math.floor(sy / this.tileSize);
      return this._blocked.has(this._map[ty]?.[tx]);
    });
    if (tileBlocked) return false;
    return !this._solidRects.some(rect => x > rect.x - 6 && x < rect.x + rect.w + 6 && y > rect.y - 4 && y < rect.y + rect.h + 8);
  },

  _updatePlayerPos() {
    const playerEl = document.getElementById('mapPlayer');
    const wrap = document.getElementById('mapWrap');
    if (!playerEl || !this.canvas || !wrap) return;
    const cRect = this.canvas.getBoundingClientRect();
    const wRect = wrap.getBoundingClientRect();
    playerEl.style.left = `${cRect.left - wRect.left + this.playerX * this._scale}px`;
    playerEl.style.top = `${cRect.top - wRect.top + this.playerY * this._scale}px`;
  },

  _tryInteract() {
    const npc = this._nearestNpc();
    if (npc && npc.dist < 34) {
      this.talkCallback?.(npc.npc);
      return;
    }
    const zone = this._nearestZone();
    if (zone && zone.dist < 42) this.enterZoneCallback?.(zone.zone.id);
  },

  _nearestNpc() {
    let best = null;
    this.npcs.forEach(npc => {
      const dist = Math.hypot(this.playerX - npc.x, this.playerY - npc.y);
      if (!best || dist < best.dist) best = { npc, dist };
    });
    return best;
  },

  _nearestZone() {
    let best = null;
    window.REPTILIA.ZONES.forEach(zone => {
      const dist = Math.hypot(this.playerX - zone.mapX, this.playerY - zone.mapY);
      if (!best || dist < best.dist) best = { zone, dist };
    });
    return best;
  },

  updatePortalStates(completedZones) {
    document.querySelectorAll('.zone-btn-wrap').forEach(btn => {
      btn.classList.toggle('completed', completedZones.includes(Number(btn.dataset.zone)));
    });
  }
};
