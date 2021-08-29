import Subject from './Subject';

export interface InputState {
  value: string;
}

export default class InputModel extends Subject {
  constructor(initialState: InputState) {
    super();

    this.state = initialState;
  }

  public subscribe(observer) {
    if (this.observers.includes(observer)) {
      return null;
    }

    this.observers.push(observer);
  }

  public unsubscribe(observer) {
    this.observers = this.observers.filter(_observer =>
      observer !== _observer
    );
  }

  public mutate(newState) {
    this.state = {
      ...this.state,
      ...newState
    };

    this.notify();
  }

  public notify() {
    this.observers.forEach(observer => {
      observer.update(this.state);
    });
  }
}
