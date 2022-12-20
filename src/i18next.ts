import i18next from "i18next";
import { initReactI18next } from "react-i18next";
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
i18next.use(initReactI18next).init({
  lng: "en",
  resources,
});

export default i18next;
