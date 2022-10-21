import Area from "./Area";
import Goblin from "./Goblin";

const container = document.querySelector('.area-container');
const area = new Area(container);
area.generateArea(16);

const goblin = new Goblin(container);
goblin.moveToRandomCell();
