import Observer from './Observer';

import type { InputState } from '../models/InputModel';

import InputController from '../controllers/InputController';

export default class Input extends Observer {
  private inputController: InputController;

  constructor(inputController: InputController) {
    super();

    this.inputController = inputController;
  }

  public handleChange(newState: InputState) {
    this.inputController.callMutator(newState);
  }

  public update(state: InputState) {
    const inputElement = document.getElementById('str-input') as HTMLInputElement;

    if (inputElement) {
      inputElement.value = state.value;
    }
  }

  public render() {
    const inputElement = document.createElement('input');
    inputElement.id = 'str-input';
    inputElement.placeholder = 'Type something';

    inputElement.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;

      this.handleChange({
        value: target.value
      });
    });

    document.body.appendChild(inputElement);
  }
}
