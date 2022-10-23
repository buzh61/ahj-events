import Score from "./Score";
const score = new Score;

export default class Gameplay {
  constructor() {
    this.cellQty = 16;
    this.container = document.querySelector('.area-container');
    this.cells = null;
    this.index = null;

    this.interval = false;
  }

  createField() {
    for (let i = 0; i < this.cellQty; i++) {
      const cell = '<div class="cell"></div>';
      this.container.innerHTML += cell;
    }
    this.cells = Array.from(document.querySelectorAll('.cell'));

    this.addEvent();
  }

  createGoblin(cell) {
    if (this.interval) {
      clearInterval(this.interval);
      cell.classList.remove('goblin')
      this.interval = false;
    }

    this.index = this.getRandomCell();
    this.cells[this.index].classList.add('goblin');
    this.startMoveGoblin();
  }

  addEvent() {
    for (let i in this.cells) {
      this.cells[i].onclick = () => {
        if (this.cells[i].classList.contains('goblin')) {
          score.increaseWinScore();

          this.createGoblin(this.cells[i]);
        } else {
          score.increaseLosingScore();
        }
        this.checkResult()

      }
    }
  }

  checkResult() {
    if (score.winScore === 5) {
      this.endGame();
      alert('Победа');
    } else if (score.losingScore === 5) {
      this.endGame();
      alert('Поражение');
    }
  }

  startMoveGoblin() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.index = this.getRandomCell(this.index);
        let goblin = this.container.querySelector('.goblin')
        goblin.classList.remove('goblin');
        this.cells[this.index].classList.add('goblin');
      }
        , 1000)
    } else {
      clearInterval(this.interval);
      startMoveGoblin();
    }
  }

  getRandomCell(index = null) {
    const result = Math.floor(Math.random() * (this.container.childNodes.length - 1));

    if (result === index) {
      return this.getRandomCell(index);
    }

    return result;
  }

  endGame() {
    this.interval = false;
    let goblin = document.querySelector('.goblin');
    goblin.classList.remove('goblin');
    for (let i in this.cells) {
      this.cells[i].onclick = null;
    }
  }
}
