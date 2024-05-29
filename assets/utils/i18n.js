import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import pt from "./pt.json";

const resources = { en, pt };
i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en",
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
