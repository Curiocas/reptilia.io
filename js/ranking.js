'use strict';

window.REPTILIA = window.REPTILIA || {};

window.REPTILIA.Ranking = {
  async render(classId = 'turma-reptilia') {
    const list = document.getElementById('rankingList');
    const status = document.getElementById('rankingStatus');
    if (!list) return;
    if (status) status.textContent = `${window.REPTILIA.FirebaseService.statusText()} | turma: ${classId}`;
    list.innerHTML = '<div class="pixel-text">Carregando ranking da turma...</div>';

    const ranking = await window.REPTILIA.FirebaseService.getRanking(classId);
    if (!ranking.length) {
      list.innerHTML = '<div class="pixel-text">Nenhum explorador no ranking desta turma ainda.</div>';
      return;
    }

    list.innerHTML = '';
    ranking.forEach((entry, index) => {
      const total = entry.totalAnswers || 0;
      const correct = entry.correctAnswers || 0;
      const accuracy = total ? Math.round((correct / total) * 100) : (entry.accuracy || 0);
      const zones = entry.zonesCompleted?.length || 0;
      const tier = accuracy >= 90 ? 'MESTRE' : accuracy >= 75 ? 'PESQUISADOR' : accuracy >= 55 ? 'EXPLORADOR' : 'INICIANTE';
      const medal = index === 0 ? '1' : index === 1 ? '2' : index === 2 ? '3' : String(index + 1);
      const item = document.createElement('div');
      item.className = `ranking-item rank-${index + 1}`;
      item.innerHTML = `
        <span class="rank-pos">${medal}</span>
        <span class="rank-main">
          <span class="rank-name">${entry.name || 'JOGADOR'}</span>
          <span class="rank-tier">${tier} | ${zones} zonas</span>
          <span class="rank-bar"><span style="width:${Math.max(4, accuracy)}%"></span></span>
        </span>
        <span class="rank-medals">${correct}/${total}<br>acertos</span>
        <span class="rank-score">${entry.score || 0} pts<br>${accuracy}%</span>
      `;
      list.appendChild(item);
    });
  }
};
