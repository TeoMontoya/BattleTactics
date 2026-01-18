import Unit from "./Unit.js";

class PlayerUnit extends Unit {
  constructor({ stamina = 10, ...data } = {}) {
    super(data);
    this.stamina = stamina;
    this.classType = "Hero";
  }
  render(gridContainer) {
    const unitEl = super.render(gridContainer);
    unitEl.classList.add("hero");
    return unitEl;
  }
}

export default PlayerUnit;
