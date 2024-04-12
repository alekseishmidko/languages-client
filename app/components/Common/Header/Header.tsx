"use client";
import { Button, Icon, Theme } from "@gravity-ui/uikit";
import { Moon, Sun } from "@gravity-ui/icons";
import Link from "next/link";
import { APP_ROUTES } from "@/app/constants/route.constants";
import React from "react";
import { useStore } from "@/app/store/store";
import { DARK, LIGHT, THEME } from "@/app/constants/theme.constants";

export default function Header() {
  const { theme, handleTheme } = useStore();
  const onThemeHandle = () => {
    localStorage.setItem(THEME, theme === DARK ? LIGHT : DARK);
    handleTheme();
  };

  return (
    <header
      className={`flex justify-between items-center p-2   sticky top-0  `}
    >
      <div className="flex space-x-2">
        <Button size="l" view="flat-success">
          Глоссарии
        </Button>
        <Button size="l" view="flat-success">
          Списки
        </Button>
        <Button size="l" view="flat-success">
          Курсы
        </Button>
        <Button size="l" view="flat-success">
          Словарь
        </Button>
      </div>

      <div className="flex space-x-4 mr-2">
        <Button size="l" view="normal-contrast" onClick={onThemeHandle}>
          <Icon data={theme === LIGHT ? Sun : Moon} />
        </Button>
        <Link href={APP_ROUTES.AUTH}>
          <Button size="l" pin="round-round" selected view="outlined-success">
            Вход
          </Button>
        </Link>
      </div>
    </header>
  );
}
