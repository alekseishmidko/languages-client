"use client";
import { Icon, Modal, Text } from "@gravity-ui/uikit";
import Link from "next/link";
import { APP_ROUTES } from "@/app/utils/constants/route.constants";
import { useStore } from "@/app/utils/store/store";
import {
  DARK,
  DEFAULT_THEME,
  LIGHT,
  THEME,
} from "@/app/utils/constants/theme.constants";
import LocaleSelector from "../LocaleSelector/LocaleSelector";
import { useEarthoOne } from "@eartho/one-client-react";
import Spinner from "../Spinner/Spinner";
import {
  Person,
  Xmark,
  ArrowRightFromSquare,
  ArrowRightToSquare,
  Moon,
  Sun,
  SquareBracketsLetterA,
} from "@gravity-ui/icons";
import { PROVIDERS } from "@/app/utils/constants/auth.constants";
import { useState } from "react";
import { toast } from "sonner";
// import { cookies } from "next/headers";

type Props = { theme: string };
export default function Header({ theme }: Props) {
  // const cookieStore = cookies();
  // const theme = (cookieStore.get("theme") ?? DEFAULT_THEME) as string;
  // const { theme, handleTheme } = useStore();
  const onThemeHandle = () => {
    //   // localStorage.setItem(THEME, theme === DARK ? LIGHT : DARK);
    //   cookieStore.set(THEME, theme === LIGHT ? DARK : LIGHT);
    // handleTheme();
  };
  const [open, setOpen] = useState(false);
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();
  const handleLogout = () => {
    logout()
      .then(() => setOpen(false))
      .finally(() => toast.warning("logout!"));
  };
  const handleLogin = () => {
    connectWithPopup({
      accessId: `${process.env.NEXT_PUBLIC_ACCESS_ID}`,
      authorizationParams: {
        max_age: "15s",
      },
      enabledAuthProviders: [...PROVIDERS],
    })
      .then(() => setOpen(false))
      .finally(() => toast.info("Successfully login!"));
  };

  return (
    <header
      className={`flex justify-between items-center p-2    sticky top-0  `}
    >
      <div className="flex space-x-8 items-center">
        <Link href={APP_ROUTES.MAIN}>
          <button className="flex items-center justify-center py-1 pl-2">
            <Icon size={22} data={SquareBracketsLetterA} />
          </button>
        </Link>
        <Link href={APP_ROUTES.GLOSSARIES}>
          <button className="flex items-center justify-center py-2">
            Глоссарии
          </button>
        </Link>
        <Link href={APP_ROUTES.LISTS}>
          <button className="flex items-center justify-center py-2">
            Списки
          </button>
        </Link>
        <Link href={APP_ROUTES.COURSES}>
          <button className="flex items-center justify-center py-2">
            Курсы
          </button>
        </Link>
        <Link href={APP_ROUTES.DICTIONARY}>
          <button className="flex items-center justify-center py-2">
            Словарь
          </button>
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
            <Spinner />
          ) : (
            <div>
              <Icon data={Person} className=" " />
            </div>
          )}
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col   gap-6 p-20  rounded-[16px] relative">
          <Text variant="display-2" className="mb-6">
            {isConnected ? (
              <span>{user?.displayName}</span>
            ) : (
              <span>Войти в систему</span>
            )}
          </Text>

          <button
            onClick={isConnected ? handleLogout : handleLogin}
            className="border-red-500 border flex items-center align-baseline justify-center py-[8px] px-[24px] rounded-lg gap-2"
          >
            <>
              {isConnected ? "Выйти" : "Войти"}
              <Icon
                data={isConnected ? ArrowRightFromSquare : ArrowRightToSquare}
              />
            </>
          </button>

          <div
            onClick={() => setOpen(false)}
            className="absolute right-2 top-2 p-1  cursor-pointer hover:rounded-full  hover:bg-gray-500 "
          >
            <Icon data={Xmark} />
          </div>
        </div>
      </Modal>
    </header>
  );
}
