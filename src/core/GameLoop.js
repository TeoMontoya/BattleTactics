class GameLoop {
  #counter = 0;
  #running = false;

  constructor() {
    this.#counter = 0;
    this.#running = false;
    this.last = 0;
  }

  start() {
    if (this.#running) return;
    this.#running = true;
    this.#counter = 0;

    this.last = performance.now();
    requestAnimationFrame(this.tick);
  }

  tick = () => {
    if (!this.#running) return;
    this.#counter++;

    const now = performance.now();

    if (now - this.last >= 1000) {
      console.log("tick");
      this.last = now;
    }

    requestAnimationFrame(this.tick);
  };
}

export default GameLoop;
