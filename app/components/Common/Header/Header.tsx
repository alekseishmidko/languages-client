"use client";
import { Button, Icon, Modal, Theme, Card, Text } from "@gravity-ui/uikit";
import { Moon, Sun } from "@gravity-ui/icons";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/constants/route.constants";
import React from "react";
import { useStore } from "@/app/utils/store/store";
import { DARK, LIGHT, THEME } from "@/app/utils/constants/theme.constants";
import { SquareBracketsLetterA } from "@gravity-ui/icons";
import Cookies from "js-cookie";
import LocaleSelector from "../LocaleSelector/LocaleSelector";
import { useEarthoOne } from "@eartho/one-client-react";
import Spinner from "../Spinner/Spinner";
import { Person, Xmark, ArrowRightFromSquare } from "@gravity-ui/icons";
export default function Header() {
  const { theme, handleTheme } = useStore();
  const onThemeHandle = () => {
    // Cookies.set(THEME, theme === DARK ? LIGHT : DARK);
    localStorage.setItem(THEME, theme === DARK ? LIGHT : DARK);

    handleTheme();
  };
  const [open, setOpen] = React.useState(false);
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();
  const handleLogout = () => {
    logout().then(() => setOpen(false));
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

      <div className="flex space-x-4 mr-1">
        <button
          onClick={onThemeHandle}
          className={`w-8 flex items-center justify-center  `}
        >
          <Icon data={theme === LIGHT ? Sun : Moon} />
        </button>
        <LocaleSelector />

        <button
          onClick={() => setOpen(true)}
          className={`w-8 flex items-center justify-center  `}
        >
          {isLoading ? (
            <Spinner size={12} />
          ) : (
            <div>
              <Icon data={Person} />
            </div>
          )}
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col   gap-6 p-20  rounded-[16px] relative">
          {isConnected ? (
            <Text variant="display-2" className="mb-6">
              <span>{user?.displayName}</span>
            </Text>
          ) : (
            <Text variant="display-2" className="mb-6">
              Войти в систему
            </Text>
          )}

          {isConnected ? (
            <Button view="outlined-info" size="xl" onClick={handleLogout}>
              Выйти <Icon data={ArrowRightFromSquare} />
            </Button>
          ) : (
            <Button
              view="outlined-info"
              size="xl"
              onClick={() =>
                connectWithPopup({
                  accessId: `${process.env.NEXT_PUBLIC_ACCESS_ID}`,
                  enabledAuthProviders: [
                    "facebook",
                    "google",
                    "github",
                    "yandex",
                    "vk",
                  ],
                })
              }
            >
              Войти
            </Button>
          )}

          <div
            onClick={() => setOpen(false)}
            className="absolute right-2 top-2 p-1   cursor-pointer hover:rounded-full  "
          >
            <Icon data={Xmark} />
          </div>
        </div>
      </Modal>
    </header>
  );
}
