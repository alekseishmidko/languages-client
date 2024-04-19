"use client";

import Header from "../components/Common/Header/Header";
import React from "react";
import { Button, Card, Icon, Text } from "@gravity-ui/uikit";
import { authFireBase } from "@/app/api/firebase/index";

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth/cordova";
import { signInWithPopup } from "firebase/auth";
import BackButton from "../components/Common/BackButton/BackButton";
const AuthPage = () => {
  // const handleGoogle = async (e) => {
  //   const provider = new GoogleAuthProvider();
  //   return signInWithPopup(authFireBase, provider);
  // };

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
              <Button
                view="outlined-danger"
                size="xl"
                // onClick={handleGoogle}
              >
                {/* <Icon data={} /> */}
                Войти через Google
              </Button>
              <Button
                view="outlined-info"
                size="xl"
                // onClick={handleSignIn("facebook")}
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
