"use client";
import { Theme, ThemeProvider } from "@gravity-ui/uikit";
import React from "react";
const DARK = "dark";
const LIGHT = "light";
const DEFAULT_THEME = LIGHT;

export type AppProps = {
  children: React.ReactNode;
};

export const ThemeWrapper: React.FC<AppProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME);

  const isDark = theme === DARK;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
