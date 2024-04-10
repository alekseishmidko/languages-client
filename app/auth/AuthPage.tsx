"use client";

import Header from "../components/Common/Header/Header";
import React from "react";
import { Button, Text } from "@gravity-ui/uikit";
import { authFireBase } from "@/app/api/firebase/index";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth/cordova";
import { signInWithPopup } from "firebase/auth";
const AuthPage = () => {
  const handleGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(authFireBase, provider);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-white  px-20 pb-20 pt-8 rounded-xl ">
          <div className="flex flex-col space-y-6">
            <Text color="dark-primary" variant="display-2" className="mb-4">
              Войти в систему
            </Text>
            <Button view="outlined-danger" size="xl" onClick={handleGoogle}>
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
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
