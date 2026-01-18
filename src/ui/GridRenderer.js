class GridRenderer {
  constructor(container, size) {
    // assign incoing data to 'this'
    this.container = container;
    this.size = size;
  }

  render() {
    // Clear the container
    this.container.innerHTML = "";

    // The container, #grid-container will 'absorb' whatever size
    // that is defined here.
    this.container.style.setProperty("--grid-size", this.size);

    //creating the cells for the grid
    for (let i = 0; i < this.size * this.size; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      this.container.appendChild(cell);
    }
  }
}

export default GridRenderer;
