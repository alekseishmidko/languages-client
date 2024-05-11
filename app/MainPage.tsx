"use client";

import { User, useEarthoOne } from "@eartho/one-client-react";
import Header from "./components/Common/Header/Header";

export default function MainPage() {
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();
  console.log(
    "isLoading:",
    isLoading,
    "isConnected:",
    isConnected,
    "error:",
    error,
    user
  );

  return (
    <div>
      <Header />
      <section className="max-w-[1240px] mx-auto">
        <div className="text-center flex justify-center flex-col mx-auto">
          <h1 className="font-bold text-5xl  mt-[64px]  ">Letter Collector</h1>
          <h3 className="font-semibold text-3xl    my-[24px] ">
            Эффективное запоминание английских слов
          </h3>
        </div>
      </section>
    </div>
  );
}
