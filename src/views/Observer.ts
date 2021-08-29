import { Message } from '../types/cores';

export interface ObserverSource {
  update: (message: Message) => void;
}

export default abstract class Observer implements ObserverSource {
  public abstract update(message: Message): void;
}
