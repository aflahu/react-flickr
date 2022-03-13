import type { RecoilState } from "recoil";
import { atom } from "recoil";
import { IData } from "./interfaces/data";

export interface AppState {
  data: IData;
  active: number;
  skip: number;
  limit: number;
}

export enum LocalStorageKey {
  APP_STATE = "APP_STATE",
}

function LoadAppStateFromLocalStorage(): AppState {
  const stringifiedJSON: string | null = window.localStorage.getItem(
    LocalStorageKey.APP_STATE
  );
  if (typeof stringifiedJSON === "string") {
    const Loaded: AppState = JSON.parse(stringifiedJSON);
    return Loaded;
  }

  const BlankAppState: AppState = {
    data: { data: [], count: 0 },
    active: 0,
    skip: 0,
    limit: 5,
  };

  return BlankAppState;
}

export const recoilState: RecoilState<AppState> = atom({
  key: "initialAppState",
  default: LoadAppStateFromLocalStorage(),
});
