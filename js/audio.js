'use strict';

window.REPTILIA = window.REPTILIA || {};

window.REPTILIA.Audio = {
  ctx: null,
  enabled: true,
  musicTimer: null,
  step: 0,
  tempoMs: 150,
  lead: [659, 784, 880, 988, 880, 784, 659, 587, 659, 784, 988, 1175, 988, 880, 784, 659],
  bass: [165, 165, 196, 196, 220, 220, 196, 196, 147, 147, 165, 165, 196, 196, 220, 247],
  harmony: [330, 392, 440, 494, 440, 392, 330, 294],

  init() {
    this.enabled = localStorage.getItem('reptilia_audio') !== 'off';
  },

  ensureContext() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') this.ctx.resume();
  },

  unlock() {
    this.ensureContext();
    if (this.enabled) this.startMusic();
  },

  setEnabled(value) {
    this.enabled = value;
    localStorage.setItem('reptilia_audio', value ? 'on' : 'off');
    if (value) {
      this.unlock();
      this.startMusic();
    } else {
      this.stopMusic();
    }
  },

  toggle() {
    this.setEnabled(!this.enabled);
    return this.enabled;
  },

  startMusic() {
    if (!this.enabled || this.musicTimer) return;
    this.musicTimer = window.setInterval(() => this.playStep(), this.tempoMs);
  },

  stopMusic() {
    window.clearInterval(this.musicTimer);
    this.musicTimer = null;
  },

  playStep() {
    if (!this.enabled) return;
    const i = this.step;
    if (i % 2 === 0) this.tone(this.lead[i % this.lead.length], 0.11, 0.035, 'square');
    if (i % 4 === 2) this.tone(this.harmony[Math.floor(i / 2) % this.harmony.length], 0.12, 0.018, 'triangle');
    if (i % 4 === 0) this.tone(this.bass[Math.floor(i / 4) % this.bass.length], 0.18, 0.035, 'triangle');
    if (i % 8 === 4) this.noise(0.035, 0.018);
    this.step += 1;
  },

  tone(freq, duration = 0.08, volume = 0.04, type = 'square') {
    if (!this.enabled) return;
    this.ensureContext();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain).connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  },

  noise(duration = 0.04, volume = 0.02) {
    if (!this.enabled) return;
    this.ensureContext();
    const now = this.ctx.currentTime;
    const buffer = this.ctx.createBuffer(1, Math.max(1, Math.floor(this.ctx.sampleRate * duration)), this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const source = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    gain.gain.value = volume;
    source.buffer = buffer;
    source.connect(gain).connect(this.ctx.destination);
    source.start(now);
  },

  click() { this.tone(988, 0.045, 0.035); },
  correct() { [784, 988, 1175].forEach((freq, i) => window.setTimeout(() => this.tone(freq, 0.08, 0.045), i * 70)); },
  wrong() { this.tone(185, 0.18, 0.055, 'sawtooth'); },
  achievement() { [523, 659, 784, 1046, 1318].forEach((freq, i) => window.setTimeout(() => this.tone(freq, 0.09, 0.05), i * 80)); }
};

document.addEventListener('DOMContentLoaded', () => window.REPTILIA.Audio.init());
