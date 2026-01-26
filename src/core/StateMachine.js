class StateMachine {
  // TO DO
  // 1.Define a set of constant states:
  // START_MENU  PLAYER_TURN   ENEMY_TURN
  //
  // 2.the current state must be private #currentState
  //
  // 3.create a method transitionTo(newState) that logs
  // the change and updates the UI
  // eg. a text label saying "player's turn"

  // 1. States
  static START_MENU = "START_MENU";
  static PLAYER_TURN = "PLAYER_TURN";
  static ENEMY_TURN = "ENEMY_TURN";

  // 1.1. Events
  static GO_TO_START_SCREEN = "GO_TO_START_SCREEN";
  static GIVE_TURN_TO_PLAYER = "GIVE_TURN_TO_PLAYER";
  static GIVE_TURN_TO_ENEMY = "GIVE_TURN_TO_ENEMY";

  // 2. current state as private
  #currentState = StateMachine.START_MENU;

  constructor(statusDisplayElement) {
    this.display = statusDisplayElement;
    this.#render();
  }

  static TRANSITIONS = {
    [StateMachine.START_MENU]: {
      [StateMachine.GIVE_TURN_TO_PLAYER]: StateMachine.PLAYER_TURN,
    },

    [StateMachine.PLAYER_TURN]: {
      [StateMachine.GIVE_TURN_TO_ENEMY]: StateMachine.ENEMY_TURN,
      [StateMachine.GO_TO_START_SCREEN]: StateMachine.START_MENU,
    },

    [StateMachine.ENEMY_TURN]: {
      [StateMachine.GIVE_TURN_TO_PLAYER]: StateMachine.PLAYER_TURN,
      [StateMachine.GO_TO_START_SCREEN]: StateMachine.START_MENU,
    },
  };

  getState() {
    return this.#currentState;
  }

  send(event) {
    const next = StateMachine.TRANSITIONS[this.#currentState]?.[event];

    if (!next) {
      console.log(`Ignored event '${event}' in state ${this.#currentState}`);
      return false;
    }

    this.#transitionTo(next);
    return true;
  }

  // 3. TransitionTo method.
  // It logs the change of state and
  // Prints the new state.
  #transitionTo(newState) {
    console.log(`Changing state from ${this.#currentState} to ${newState}`);
    this.#currentState = newState;
    this.#render();
  }

  //3.1
  // Prints the current state
  // Thid checks wether or not the
  // display Element exists and returns if it doesnt.
  #render() {
    if (!this.display) return;

    this.display.textContent = `Current Status: ${this.#currentState}`;
    console.log(this.#currentState);
  }
}
export default StateMachine;
