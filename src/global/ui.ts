import { makeAutoObservable } from "mobx";

import { RootStore } from "./root";

export class UiStore {
  public readonly rootStore: RootStore;
  public loading: Record<string, boolean> = {};

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }

  public startLoading = (name: string) => {
    this.loading[name] = true;
  };

  public stopLoading = (name: string) => {
    if (this.loading[name] === false) {
      return;
    }

    this.loading[name] = false;
  };
}
