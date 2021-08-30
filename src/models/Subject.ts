import type Observer from '../views/Observer';

import { State, Message } from '../types/cores';

interface SubjectSource {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
  mutate: (newState: State) => void;
  notify: (message?: Message) => void;
}

export default abstract class Subject implements SubjectSource {
  protected observers: Observer[] = [];
  protected state: State = {};

  public abstract subscribe(observer: Observer): void;
  public abstract unsubscribe(observer: Observer): void;
  public abstract mutate(newState: State): void;
  public abstract notify(message?: Message): void;
}
