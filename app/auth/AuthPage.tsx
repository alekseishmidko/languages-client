"use client";

import Header from "../components/Common/Header/Header";
import React from "react";
import { Button, Card } from "@gravity-ui/uikit";

const AuthPage = () => {
  const handleSignIn = () => () => {
    // signIn(provider);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-white  px-20 pb-20 pt-8 rounded-lg  ">
          <div className="flex flex-col space-y-6">
            <h1 className="text-2xl font-bold  text-center mb-8 ">
              Войти в систему
            </h1>
            <Button
              view="outlined-success"
              size="xl"
              onClick={handleSignIn("google")}
            >
              Войти через Google
            </Button>
            <Button
              view="outlined-info"
              size="xl"
              onClick={handleSignIn("facebook")}
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
