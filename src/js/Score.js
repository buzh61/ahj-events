import Gameplay from "./Gameplay";

// let gameplay = new Gameplay();

export default class Score {
  constructor() {
    this.winScoreContainer = document.querySelector('.win-score');
    this.losingScoreContainer = document.querySelector('.losing-score');
    this.winScore = 0;
    this.losingScore = 0;
  }

  increaseWinScore() {
    this.winScore += 1;
    this.winScoreContainer.innerHTML = this.winScore;
    this.checkScoreResult();
  }

  increaseLosingScore() {
    this.losingScore += 1;
    this.losingScoreContainer.innerHTML = this.losingScore;
    this.checkScoreResult();
  }

  checkScoreResult() {
    if (this.winScore === 5) {
      return false
    } else if (this.losingScore === 5) {
      return false
    }
  }
}
