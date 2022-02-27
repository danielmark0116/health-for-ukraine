import translationsPL from "../locales/pl/translations.json";
import translationsUA from "../locales/ua/translations.json";
import detector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    resources: {
      pl: {
        translation: translationsPL,
      },
      ua: {
        translation: translationsUA,
      },
    },
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
