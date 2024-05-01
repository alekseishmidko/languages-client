"use client";

import Header from "../components/Common/Header/Header";
import React from "react";
import { Button, Card, Icon, Text } from "@gravity-ui/uikit";
import { auth } from "@/app/utils/firebase/index";
import { EarthoOneProvider, useEarthoOne } from "@eartho/one-client-react";
// import {
//   GoogleAuthProvider,
//   FacebookAuthProvider,
// } from "firebase/auth/cordova";
// import { signInWithPopup } from "firebase/auth";
import BackButton from "../components/Common/BackButton/BackButton";
const AuthPage = () => {
  // const handleGoogle = async () => {
  // const provider = new GoogleAuthProvider();
  // signInWithPopup(auth, provider).then((data) => {
  //   console.log(data);
  // });
  // };

  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();

  return (
    <div className="relative">
      <Header />
      <BackButton />
      <div className="flex justify-center items-center min-h-screen ">
        <div className=" px-20 pb-20 pt-8 rounded-xl ">
          <Card className="p-20" theme="normal" size="l">
            <div className="flex flex-col   gap-6">
              <Text variant="display-2" className="mb-6">
                Войти в систему
              </Text>
              <Button view="outlined-danger" size="xl">
                {/* <Icon data={} /> */}
                Войти через Google
              </Button>

              <Button
                view="outlined-info"
                size="xl"
                onClick={() =>
                  connectWithPopup({
                    accessId: `${process.env.NEXT_PUBLIC_ACCESS_ID}`,
                  })
                }
              >
                Войти через Facebook
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
