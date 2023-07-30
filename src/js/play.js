export default class Play {
  constructor(app) {
    this.app = app;
    this.scores = { win: 0, loos: 0 };
    this.checkTarget = this.checkTarget.bind(this);
  }

static ShowStat(scores, stat) {
	const stat1 = document.querySelector('.gamestat');
    stat1.innerHTML = `
    <h3>${stat}</h3>
    Попал: <strong>${scores.win}</strong>, Промахнулся: <strong>${scores.loos}</strong>`	
}

  init() {
    this.app.wrapper.addEventListener('click', this.checkTarget);
    this.timerId = setInterval(() => {
      const gameOver = this.checkScores(false);
      if (gameOver) {
		return;
	  }
	  else {
        Play.ShowStat(this.scores, 'Игра идет');
	  }
    }, 1000);
  }

  checkScores(clickEvent) {
    if (this.scores.loos >= 5 || this.scores.win >= 5) {
      clearInterval(this.timerId);
	  clearInterval(this.app.timerId);
      this.app.wrapper.removeEventListener('click', this.checkTarget);
      Play.ShowStat(this.scores, 'Игра окончена');
      return true;
    }
	if (!clickEvent) this.scores.loos += +1;
    else this.scores.loos -= 1;
    return false;
  }

  checkTarget(e) {
	if (e.target.classList.contains("goblin")) {
      this.scores.win += 1;
      this.checkScores(true);
    }
  }
}