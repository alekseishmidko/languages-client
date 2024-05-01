"use client";

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
  isClient: boolean;
  handleTheme: () => void;
}

export const useStore = create<IStore>((set) => ({
  // theme: Cookies.get(THEME) || DEFAULT_THEME,
  // theme: localStorage?.getItem(THEME) ?? DEFAULT_THEME,
  theme: localStorage?.getItem(THEME) ?? DEFAULT_THEME,
  isClient: true,
  handleTheme: () =>
    set((state) => ({ theme: state.theme === DARK ? LIGHT : DARK })),
}));
