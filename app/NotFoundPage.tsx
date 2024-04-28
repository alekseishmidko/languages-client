"use client";

import React from "react";
import { Button, Text } from "@gravity-ui/uikit";
import Link from "next/link";
import { APP_ROUTES } from "./utils/constants/route.constants";

import Image from "next/image";
import Header from "./components/Common/Header/Header";
const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <div className={`flex justify-center items-center min-h-screen  `}>
        <div className="  flex flex-col items-center   ">
          <Image width={400} height={300} src="404.svg" alt="404" />
          <Text variant="display-1" className="my-3  " color="info-heavy">
            404 Not Found
          </Text>
          <Text
            variant="subheader-3"
            className="mb-5 text-center"
            color="misc-heavy"
          >
            Запрашиваемая страница не найдена
          </Text>
          <Link href={APP_ROUTES.MAIN}>
            <Button view="flat-info" size="xl">
              <Text color="misc-heavy">На главную</Text>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
