import Unit from "./Unit.js";

class EnemyUnit extends Unit {
  constructor({ aggroRange = 3, ...data } = {}) {
    super(data);
    this.aggroRange = aggroRange;
    this.classType = "Enemy";
  }
  render(gridContainer, gridSize) {
    const unitEl = super.render(gridContainer, gridSize);
    unitEl.classList.add("enemy");
    return unitEl;
  }
}

export default EnemyUnit;
