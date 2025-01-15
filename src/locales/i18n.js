import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./english/en.json";
import faLang from "./persian/persian.json";

const resources = {
  en: {
    translation: enLang,
  },
  fa: {
    translation: faLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
