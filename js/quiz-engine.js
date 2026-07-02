'use strict';

window.REPTILIA = window.REPTILIA || {};

window.REPTILIA.QuizEngine = {
  zone: null,
  index: 0,
  correct: 0,
  answered: false,
  timer: null,
  timeLimit: 45,
  timeLeft: 45,
  enemyHp: 100,
  playerHp: 100,
  combo: 0,
  onComplete: null,

  start(zone, onComplete) {
    this.zone = zone;
    this.index = 0;
    this.correct = 0;
    this.combo = 0;
    this.enemyHp = 100;
    this.playerHp = 100;
    this.onComplete = onComplete;
    this.showQuestion();
  },

  showQuestion() {
    const q = this.zone.questions[this.index];
    this.answered = false;
    this.timeLimit = q.time || 45;
    this.timeLeft = this.timeLimit;

    document.getElementById('quizQCount').textContent = `Q ${this.index + 1}/${this.zone.questions.length}`;
    document.getElementById('quizQuestion').innerHTML = this._questionHtml(q);
    document.getElementById('quizEnemyName').textContent = this.zone.guardianName;
    const enemyIcon = window.REPTILIA.Game?.zoneIcon(this.zone.id) || 'assets/img/lagarto1.png';
    const playerIcon = window.REPTILIA.Game?.state.gender === 'female' ? 'assets/img/cientista2.png' : 'assets/img/cientista1.png';
    document.getElementById('quizEnemySprite').innerHTML = `<img src="${enemyIcon}" alt="">`;
    document.getElementById('quizPlayerSprite').innerHTML = `<img src="${playerIcon}" alt="">`;
    this._renderBars();
    this._renderBattleStatus('Escolha um movimento.');
    document.getElementById('quizFeedback').style.display = 'none';

    const options = document.getElementById('quizOptions');
    options.innerHTML = '';
    q.options.forEach((option, optionIndex) => {
      const button = document.createElement('button');
      button.className = 'quiz-option pixel-text';
      button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>${this._escape(option)}`;
      button.addEventListener('click', () => this.answer(optionIndex));
      options.appendChild(button);
    });

    this.tick();
    window.clearInterval(this.timer);
    this.timer = window.setInterval(() => this.tick(), 1000);
  },

  tick() {
    const timerFill = document.getElementById('quizTimerFill');
    document.getElementById('quizTimerVal').textContent = this.timeLeft;
    timerFill.style.width = `${(this.timeLeft / this.timeLimit) * 100}%`;
    timerFill.classList.toggle('warning', this.timeLeft <= Math.ceil(this.timeLimit * 0.45));
    timerFill.classList.toggle('danger', this.timeLeft <= Math.ceil(this.timeLimit * 0.2));
    if (this.timeLeft <= 0) {
      this.answer(-1);
      return;
    }
    this.timeLeft -= 1;
  },

  answer(optionIndex) {
    if (this.answered) return;
    this.answered = true;
    window.clearInterval(this.timer);

    const question = this.zone.questions[this.index];
    const isCorrect = optionIndex === question.correct;
    const fast = this.timeLeft >= Math.ceil(this.timeLimit * 0.55);
    let damage = 0;
    if (isCorrect) {
      this.correct += 1;
      this.combo += 1;
      damage = Math.min(34, Math.ceil(100 / this.zone.questions.length) + this.combo * 3 + (fast ? 6 : 0));
      this.enemyHp = Math.max(0, this.enemyHp - damage);
    } else {
      this.combo = 0;
      const loss = optionIndex === -1 ? 22 : 14;
      this.playerHp = Math.max(8, this.playerHp - loss);
    }
    if (window.REPTILIA.Audio) {
      if (isCorrect) window.REPTILIA.Audio.correct();
      else window.REPTILIA.Audio.wrong();
    }

    document.querySelectorAll('.quiz-option').forEach((button, i) => {
      button.disabled = true;
      if (i === question.correct) button.classList.add('correct');
      if (i === optionIndex && !isCorrect) button.classList.add('wrong');
    });

    this._renderBars();
    this._playBattleEffect(isCorrect, damage, optionIndex === -1);
    this._renderBattleStatus(isCorrect ? `Dano ${damage} | Combo x${this.combo}${fast ? ' | bonus rapido' : ''}` : 'Defesa quebrada. Revise a dica.');
    document.getElementById('zoneProgFill').style.width = `${60 + ((this.index + 1) / this.zone.questions.length) * 40}%`;

    document.getElementById('feedbackIcon').textContent = isCorrect ? `DANO ${damage}` : (optionIndex === -1 ? 'TEMPO' : 'ERROU');
    document.getElementById('feedbackText').textContent = isCorrect
      ? `Golpe efetivo! ${fast ? 'Resposta rapida deu bonus.' : 'Boa leitura da pergunta.'}`
      : 'O guardiao contra-atacou. Leia a explicacao antes de continuar.';
    document.getElementById('feedbackExp').innerHTML = this._explanationHtml(question);
    document.getElementById('quizFeedback').style.display = 'flex';
  },

  next() {
    if (this.index < this.zone.questions.length - 1) {
      this.index += 1;
      this.showQuestion();
      return;
    }
    window.clearInterval(this.timer);
    this.enemyHp = 0;
    this._renderBars();
    if (this.onComplete) this.onComplete(this.correct, this.zone.questions.length);
  },

  _questionHtml(question) {
    const context = question.context ? `<span class="question-context">${this._escape(question.context)}</span>` : '';
    return `${context}<span class="question-main">${this._escape(question.q)}</span>`;
  },

  _explanationHtml(question) {
    const why = this._escape(question.explanation || '').replace(/\n/g, '<br>');
    const deep = question.deep ? `<br><br><span class="feedback-deep">${this._escape(question.deep).replace(/\n/g, '<br>')}</span>` : '';
    return `<strong>Explicacao:</strong> ${why}${deep}`;
  },

  _renderBars() {
    const enemy = document.getElementById('quizEnemyHp');
    const player = document.getElementById('quizPlayerHp');
    if (enemy) {
      enemy.style.width = `${Math.max(0, this.enemyHp)}%`;
      enemy.classList.toggle('hp-yellow', this.enemyHp <= 55 && this.enemyHp > 25);
      enemy.classList.toggle('hp-red', this.enemyHp <= 25);
    }
    if (player) {
      player.style.width = `${Math.max(0, this.playerHp)}%`;
      player.classList.toggle('hp-yellow', this.playerHp <= 60 && this.playerHp > 30);
      player.classList.toggle('hp-red', this.playerHp <= 30);
    }
  },

  _renderBattleStatus(text) {
    let status = document.getElementById('quizBattleStatus');
    if (!status) {
      status = document.createElement('span');
      status.id = 'quizBattleStatus';
      status.className = 'pixel-text quiz-battle-status';
      document.querySelector('.quiz-info')?.appendChild(status);
    }
    status.textContent = text;
  },

  _playBattleEffect(isCorrect, damage, timeout) {
    const scene = document.querySelector('.quiz-battle-scene');
    if (!scene) return;
    const effect = document.createElement('div');
    effect.className = `attack-effect ${isCorrect ? 'hit' : 'miss'}`;
    effect.textContent = isCorrect ? `-${damage}` : (timeout ? 'TEMPO' : 'BLOQUEIO');
    scene.appendChild(effect);
    document.getElementById('quizEnemySprite')?.classList.toggle('take-hit', isCorrect);
    document.getElementById('quizPlayerSprite')?.classList.toggle('take-hit', !isCorrect);
    document.getElementById('quizPlayerSprite')?.classList.toggle('player-attack', isCorrect);
    window.setTimeout(() => {
      effect.remove();
      document.getElementById('quizEnemySprite')?.classList.remove('take-hit');
      document.getElementById('quizPlayerSprite')?.classList.remove('take-hit', 'player-attack');
    }, 620);
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
