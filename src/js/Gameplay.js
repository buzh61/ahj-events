export default class Gameplay {
  constructor(container) {
    this.container = container;
    this.score = document.querySelector('.score');
  }

  getPoint() {
    let cells = Array.from(document.querySelectorAll('.cell'));
    for (let i in cells) {
      cells[i].onclick = () => {
        if (cells[i].classList.contains('active')) {
          this.score.innerHTML = parseInt(this.score.innerHTML) + 1;
          if (parseInt(this.score.innerHTML) === 5) {
            alert('Победа!')
          }
        }
      }
    }
  }



}
