"use client";
import { ThemeProvider } from "@gravity-ui/uikit";
import React from "react";

import { useStore } from "@/app/store/store";

export type AppProps = {
  children: React.ReactNode;
};

export const ThemeWrapper: React.FC<AppProps> = ({ children }) => {
  const { theme } = useStore();
  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
};
