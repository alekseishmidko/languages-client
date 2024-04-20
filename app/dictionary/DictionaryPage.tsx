"use client";

import { Card, TextInput } from "@gravity-ui/uikit";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { useStore } from "@/app/utils/store/store";
import { debounce } from "@/app/utils/helpers/debounce";
import Header from "@/app/components/Common/Header/Header";

type FormData = {
  word: string;
};

export default function DictionaryPage() {
  const { theme } = useStore();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    },
    []
  );

  const debouncedInputChange = useCallback(debounce(handleInputChange, 1000), [
    handleInputChange,
  ]);

  return (
    <div>
      <Header />
      <section className="max-w-[1240px] mx-auto ">
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

        <div className="max-w-[600px]  ">
          <form>
            <TextInput
              className={`mt-[38px] rounded-[10px]   ${
                theme === "light" ? "border-2 border-emerald-300 " : "border-2 "
              }`}
              placeholder="Начните вводить английское слово"
              hasClear
              size="xl"
              {...register("word")}
              onChange={debouncedInputChange}
            />
          </form>
        </div>
      </section>
    </div>
  );
}
