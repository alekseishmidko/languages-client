"use client";

import { ThemeProvider } from "@gravity-ui/uikit";
import React from "react";

export type AppProps = {
  children: React.ReactNode;
  theme: string;
};

export const ThemeWrapper: React.FC<AppProps> = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
};
