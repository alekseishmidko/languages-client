"use client";
import { Button, Icon, Theme, ThemeProvider } from "@gravity-ui/uikit";
import React from "react";
import { Moon, Sun } from "@gravity-ui/icons";
const DARK = "dark";
const LIGHT = "light";
const DEFAULT_THEME = LIGHT;

export type AppProps = {
  children: React.ReactNode;
};

export const ThemeWrapper: React.FC<AppProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(
    localStorage.getItem("theme") ?? DEFAULT_THEME
  );

  const isDark = theme === DARK;

  return (
    <ThemeProvider theme={theme}>
      <Button
        size="l"
        view="outlined"
        onClick={() => {
          setTheme(isDark ? LIGHT : DARK);
        }}
      >
        <Icon data={isDark ? Sun : Moon} />
      </Button>
      {children}
    </ThemeProvider>
  );
};

// const handleTheme = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//   setTheme(theme === LIGHT ? DARK : LIGHT);
//   localStorage.setItem("theme", theme);
// };

{
  /* <div onClick={(e) => handleTheme(e)}>{theme}</div> */
}
