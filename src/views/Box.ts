import Observer from './Observer';

import type { InputState } from '../models/InputModel';

export default class Box extends Observer {
  public update(state: InputState) {
    const boxElement = document.getElementById('box');

    if (boxElement) {
      boxElement.textContent = state.value;
    }
  }

  public render() {
    const boxElement = document.createElement('div');
    boxElement.id = 'box';

    document.body.appendChild(boxElement);
  }
}
