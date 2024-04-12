import { Theme } from "@gravity-ui/uikit";
import { create } from "zustand";
import {
  DARK,
  DEFAULT_THEME,
  LIGHT,
  THEME,
} from "../constants/theme.constants";

export interface IStore {
  theme: Theme;
  handleTheme: () => void;
}

export const useStore = create<IStore>((set) => ({
  theme: localStorage.getItem(THEME) ?? DEFAULT_THEME,
  handleTheme: () =>
    set((state) => ({ theme: state.theme === DARK ? LIGHT : DARK })),
}));
