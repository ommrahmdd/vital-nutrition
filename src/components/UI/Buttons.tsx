import React from "react";
import { useTranslation } from "react-i18next";

export function MainBtn({
  text,
  icon,
}: {
  text: string;
  icon?: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  return (
    <button
      className={`flex items-center gap-x-2 bg-orangeColor text-white py-3 px-6 rounded-lg text-sm tracking-widest cursor-pointer transition-all duration-300 ease-in-out hover:bg-orangeColorLight uppercase ${
        i18n.language === "ar" && "font-cairo"
      }`}
    >
      {text}
      <span>{icon}</span>
    </button>
  );
}
export function SBtn({ text, icon }: { text: string; icon?: React.ReactNode }) {
  const { i18n } = useTranslation();
  return (
    <button
      className={`flex items-center gap-x-2 bg-transparent text-orangeColor py-2 px-3 rounded-lg text-sm tracking-widest cursor-pointer transition-all duration-300 ease-in-out hover:bg-orangeColorLight hover:text-white uppercase ${
        i18n.language === "ar" && "font-cairo"
      }`}
    >
      {text}
      <span>{icon}</span>
    </button>
  );
}
