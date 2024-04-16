"use client";

import Header from "./components/Common/Header/Header";

export default function MainPage() {
  return (
    <div>
      <Header />
      <section className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h1 className="font-bold text-5xl  mt-[64px]  ">Letter Collector</h1>
          <h3 className="font-semibold text-3xl    my-[24px]">
            Эффективное запоминание английских слов
          </h3>
        </div>
        <div className="grid grid-cols-2 ">
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
