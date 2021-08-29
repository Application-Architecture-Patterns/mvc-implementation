import { State } from '../types/cores';

interface ControllerSource {
  callMutator: (newState: State) => void;
}

export default abstract class Controller implements ControllerSource {
  public abstract callMutator(newState: State): void;
}
