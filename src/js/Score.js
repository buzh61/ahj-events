export default class Score {
  constructor() {
    this.scoreContainer = document.querySelector('.score');
    this.score = 0;
  }

  increaseScore() {
    this.score += 1;
    this.scoreContainer.innerHTML = this.score;
    this.checkWin();
  }

  checkWin() {
    if (this.score === 5) {
      alert('Победа!')
    }
  }
}
