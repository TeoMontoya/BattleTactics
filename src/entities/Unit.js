class Unit {
  constructor({ id, name, health, x, y }) {
    this.id = id;
    this.name = name;
    this.health = health;
    this.x = x;
    this.y = y;
  }

  render(gridContainer) {
    let unitEl = document.createElement("div");
    unitEl.classList.add("unit");

    unitEl.style.gridColumn = this.x + 1;
    unitEl.style.gridRow = this.y + 1;

    gridContainer.appendChild(unitEl);
    return unitEl;
  }
}
export default Unit;
