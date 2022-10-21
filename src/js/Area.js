import Gameplay from "./Gameplay";

export default class Area {
  constructor(container) {
    this.container = container
  }

  generateArea(count) {
    for (let i = 0; i < count; i++) {
      const cell = '<div class="cell"></div>';
      this.container.innerHTML += cell;

    }
    let start = new Gameplay();
    start.getPoint();

  }
}
