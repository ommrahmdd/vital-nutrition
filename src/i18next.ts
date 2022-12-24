import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import EnTranslation from "./local/en.json";
import ArTranslation from "./local/ar.json";

const resources = {
  en: {
    translation: EnTranslation,
  },
  ar: {
    translation: ArTranslation,
  },
};
i18next.use(initReactI18next).use(I18nextBrowserLanguageDetector).init({
  lng: "en",
  resources,
});

export default i18next;
