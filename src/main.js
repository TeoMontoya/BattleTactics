import { VERSION, ENGINE_NAME } from "./utils/constants.js";
import GridRenderer from "./ui/GridRenderer.js";
import GameLoop from "./core/GameLoop.js";
import Unit from "./entities/Unit.js";
import PlayerUnit from "./entities/PlayerUnit.js";
import EnemyUnit from "./entities/EnemyUnits.js";
import StateMachine from "./core/StateMachine.js";

const GRID_SIZE = 10;

const gridContainerElement = document.getElementById("grid-container");
const unitLayerElement = document.getElementById("units-layer");
unitLayerElement.style.setProperty("--grid-size", GRID_SIZE);
const grid = new GridRenderer(gridContainerElement, GRID_SIZE);
const stateDisplayElement = document.getElementById("status");
const currentStateMachine = new StateMachine(stateDisplayElement);
window.sm = currentStateMachine;
window.SM = StateMachine;

const ticker = new GameLoop();
const hero = new PlayerUnit({
  id: 2,
  name: "Hero",
  health: 150,
  x: 5,
  y: 5,
  stamina: 15,
});
const villain = new EnemyUnit({
  id: 6,
  name: "villain",
  health: 150,
  x: 2,
  y: 4,
  aggroRange: 4,
});

grid.render();
ticker.start();
hero.render(unitLayerElement, GRID_SIZE);
villain.render(unitLayerElement, GRID_SIZE);
console.log(`${ENGINE_NAME}: Initialized (v${VERSION})`);
console.log(villain);
