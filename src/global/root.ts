/* eslint-disable @typescript-eslint/no-explicit-any */
import { GlobalStore } from "./global";
import { UiStore } from "./ui";

import axios from "axios";

interface FetchOptions {
  errorMessage?: string;
  onError?: (errorCode: string) => unknown;
}

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://api.belo.app/";

export class RootStore {
  public readonly uiStore;
  public readonly globalStore;

  private requests: Record<string, Promise<unknown> | undefined> = {};

  constructor() {
    axios.defaults.baseURL = API_BASE_URL;

    this.uiStore = new UiStore(this);
    this.globalStore = new GlobalStore(this);
  }

  public fetch<T>(
    name: string,
    handler: () => Promise<T>,
    options?: FetchOptions
  ): Promise<T> {
    if (this.requests[name]) {
      return this.requests[name]
        ?.catch(function (error) {
          console.info("fetch error", name, error);
        })
        .finally(() => {
          this.requests[name] = undefined;
        }) as Promise<T>;
    }

    this.uiStore.startLoading(name);

    const request = handler().then(
      (result) => {
        this.uiStore.stopLoading(name);
        return result;
      },
      (error: any) => {
        this.uiStore.stopLoading(name);

        const errorCode =
          error?.extensions?.code ?? error?.response?.data?.error;

        const tooManyRequest = error?.response?.data?.statusCode === 429;

        if (tooManyRequest) {
          // this.uiStore.showError(i18n.t(`errors.rate_limit_error`));
          return;
        }

        if (options?.onError) {
          return {
            errorMessage: options.onError(errorCode) ?? "defaultError",
            errorCode: errorCode ?? error.cause,
          };
        }
        if (options?.errorMessage) {
          // this.uiStore.showError(i18n.t(`errors.${options?.errorMessage}`));
        }
        throw error;
      }
    ) as Promise<T>;

    this.requests[name] = request;

    return request
      .catch(function (error) {
        console.info("fetch error", name, error);
      })
      .finally(() => {
        this.requests[name] = undefined;
      }) as Promise<T>;
  }
}

export const store = new RootStore();
