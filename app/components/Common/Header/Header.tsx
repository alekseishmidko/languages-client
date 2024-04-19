"use client";
import { Button, Icon, Theme } from "@gravity-ui/uikit";
import { Moon, Sun } from "@gravity-ui/icons";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/constants/route.constants";
import React from "react";
import { useStore } from "@/app/utils/store/store";
import { DARK, LIGHT, THEME } from "@/app/utils/constants/theme.constants";
import { SquareBracketsLetterA } from "@gravity-ui/icons";
import Cookies from "js-cookie";
export default function Header() {
  const { theme, handleTheme } = useStore();
  const onThemeHandle = () => {
    // Cookies.set(THEME, theme === DARK ? LIGHT : DARK);
    localStorage.setItem(THEME, theme === DARK ? LIGHT : DARK);

    handleTheme();
  };

  return (
    <header
      className={`flex justify-between items-center p-2   sticky top-0  `}
    >
      <div className="flex space-x-2">
        <Link href={APP_ROUTES.MAIN}>
          <Button size="l" view="flat-success">
            <Icon size={22} data={SquareBracketsLetterA} />
            Главная
          </Button>
        </Link>
        <Link href={APP_ROUTES.GLOSSARIES}>
          <Button size="l" view="flat-success">
            Глоссарии
          </Button>
        </Link>
        <Link href={APP_ROUTES.LISTS}>
          <Button size="l" view="flat-success">
            Списки
          </Button>
        </Link>
        <Link href={APP_ROUTES.COURSES}>
          <Button size="l" view="flat-success">
            Курсы
          </Button>
        </Link>
        <Link href={APP_ROUTES.DICTIONARY}>
          <Button size="l" view="flat-success">
            Словарь
          </Button>
        </Link>
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
