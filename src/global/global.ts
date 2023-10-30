import { makeAutoObservable } from "mobx";

import { RootStore } from "./root";

export class GlobalStore {
  public readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }
}
