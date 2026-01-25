class Unit {
  constructor({ id, name, health, x, y }) {
    this.id = id;
    this.name = name;
    this.health = health;
    this.x = x;
    this.y = y;
  }

  render(gridContainer, gridSize) {
    //prevent out of bounds errors

    if (this.x < 1 || this.x > gridSize || this.y < 1 || this.y > gridSize) {
      throw new Error(
        `Out of bounds: (${this.x}, ${this.y}) for ${gridSize}x${gridSize}`,
      );
    }

    let unitEl = document.createElement("div");
    unitEl.classList.add("unit");

    unitEl.style.gridColumn = this.x;
    unitEl.style.gridRow = this.y;

    gridContainer.appendChild(unitEl);

    return unitEl;
  }
}
export default Unit;
