import { Select } from "@gravity-ui/uikit";
import React from "react";

export default function LocaleSelector() {
  const handleLocale = (value: string[]) => {
    console.log(value); // логика которая изменяет локаль
  };
  return (
    <Select
      defaultValue={["en"]}
      size="l"
      onUpdate={(value) => handleLocale(value)}
      options={[
        { value: "en", content: "English" },
        { value: "ru", content: "Русский" },
      ]}
    />
  );
}
