"use client";

import Header from "../components/Common/Header/Header";
import React from "react";
import { Button, Card, Icon, Text } from "@gravity-ui/uikit";

import { useEarthoOne } from "@eartho/one-client-react";

import BackButton from "../components/Common/BackButton/BackButton";
const AuthPage = () => {
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();
  console.log(isLoading, isConnected, error, user);
  return (
    <div className="relative">
      <Header />
      <BackButton />
      <div className="flex justify-center items-center min-h-screen ">
        <div className=" px-20 pb-20 pt-8 rounded-xl ">
          <Card className="p-20" theme="normal" size="l">
            <div className="flex flex-col   gap-6">
              {isConnected ? (
                <Text variant="display-2" className="mb-6">
                  {user?.displayName}
                </Text>
              ) : (
                <Text variant="display-2" className="mb-6">
                  Войти в систему
                </Text>
              )}

              {isConnected ? (
                <Button view="outlined-info" size="xl" onClick={() => logout()}>
                  Выйти
                </Button>
              ) : (
                <Button
                  view="outlined-info"
                  size="xl"
                  onClick={() =>
                    connectWithPopup({
                      accessId: `${process.env.NEXT_PUBLIC_ACCESS_ID}`,
                    })
                  }
                >
                  Войти
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
