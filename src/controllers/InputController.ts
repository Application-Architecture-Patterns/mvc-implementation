import Controller from './Controller';

import InputModel from '../models/InputModel';

export default class InputController extends Controller {
  private inputModel: InputModel;

  constructor(inputModel: InputModel) {
    super();

    this.inputModel = inputModel;
  }

  public callMutator(newState) {
    this.inputModel.mutate(newState);
  }
}
