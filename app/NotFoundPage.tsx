"use client";

import React from "react";
import { Button, Text } from "@gravity-ui/uikit";
import Link from "next/link";
import { APP_ROUTES } from "./constants/route.constants";
import NotFound from "@gravity-ui/illustrations/NotFound";
const NotFoundPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-green-50">
        <div className="  flex flex-col items-center">
          <NotFound className=" mt-[-14px] scale-90 py-6" />
          <Text variant="display-1" className="mb-3  " color="warning-heavy">
            404 Not Found
          </Text>
          <Text
            variant="subheader-3"
            className="mb-5 text-center"
            color="warning-heavy"
          >
            Запрашиваемая страница не найдена
          </Text>
          <Link href={APP_ROUTES.MAIN}>
            <Button view="action" size="xl">
              <Text color="link-hover">На главную</Text>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
