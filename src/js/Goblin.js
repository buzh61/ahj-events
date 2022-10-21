export default class Goblin {
  constructor(container) {
    this.container = container;
  }

  getNextCell(index) {
    const result = Math.floor(Math.random() * (this.container.childNodes.length - 1));

    if (result === index) {
      return this.getNextCell(index);
    }

    return result;
  }

  moveToRandomCell() {
    let index = 0;

    setInterval(() => {
      const activeCell = this.container.querySelector('.active');

      if (activeCell) {
        activeCell.classList.remove('active');
      }
      index = this.getNextCell(index);
      const cell = this.container.childNodes[index];
      if (cell) {
        cell.classList.add('active');

      }
    }, 1000);
  }
}
