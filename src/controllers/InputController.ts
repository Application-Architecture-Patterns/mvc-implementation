import InputModel from '../models/InputModel';

export default class InputController {
  private inputModel: InputModel;

  constructor(inputModel: InputModel) {
    this.inputModel = inputModel;
  }

  public callMutator(newState) {
    this.inputModel.mutate(newState);
  }
}
