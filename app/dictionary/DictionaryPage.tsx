"use client";

import { TextInput } from "@gravity-ui/uikit";
import Header from "../components/Common/Header/Header";
import { useStore } from "../store/store";

export default function DictionaryPage() {
  const { theme } = useStore();
  return (
    <div>
      <Header />
      <section className="max-w-[1240px] mx-auto">
        <div className="text-left">
          <h3 className="font-semibold text-2xl mt-[64px]">
            Английский словарь на 180 000 слов
          </h3>
          <p className="py-4 text-lg">
            Ищите английские слова в нашем словаре и добавляйте их в свои списки
            для дальнейшего запоминания на 15 разнообразных упражнениях.
            <br />
            <br />
            Английские слова и фразы содержат не только картинку, транскрипцию,
            основной перевод и озвучивание, но и примеры использования,
            определения на английском языке, а также синонимы и антонимы.
          </p>
        </div>
        {/* debounce */}
        <div className="max-w-[600px] mx-auto">
          <TextInput
            className={`mt-[38px] rounded-[10px] ${
              theme === "light" ? "border-2 border-emerald-300 " : "border-2 "
            }`}
            placeholder="Начните вводить английское слово"
            hasClear
            size="xl"
          />
        </div>
      </section>
    </div>
  );
}
