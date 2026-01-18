import { VERSION, ENGINE_NAME } from "./utils/constants.js";
import GridRenderer from "./ui/GridRenderer.js";
import GameLoop from "./core/GameLoop.js";
import Unit from "./entities/Unit.js";

const gridContainerElement = document.getElementById("grid-container");
const unitLayerElement = document.getElementById("units-layer");
const grid = new GridRenderer(gridContainerElement, 10);
const ticker = new GameLoop();
const newWarrior = new Unit({
  id: 2,
  name: "Warrior",
  health: 150,
  x: 7,
  y: 7,
});

grid.render();
ticker.start();
newWarrior.render(unitLayerElement);
console.log(`${ENGINE_NAME}: Initialized (v${VERSION})`);
