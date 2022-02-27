import { useCallback, useState } from "react";
import i18n from "../utils/i18n";

export const allowedLanguages = ["ua", "pl"] as const;
export type Languages = typeof allowedLanguages[number];
const LANG_STORAGE_KEY = "i18nextLng";

function isValidLang(value: string): value is Languages {
  return allowedLanguages.indexOf(value as Languages) !== -1;
}

export const useLanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Languages>(() => {
    const lang = window.localStorage.getItem(LANG_STORAGE_KEY) || "";

    const isLanguageValid = isValidLang(lang);

    if (isLanguageValid) {
      return lang;
    } else {
      return "pl";
    }
  });

  const changeLanguage = useCallback((lang: Languages) => {
    const isLanguageValid = isValidLang(lang);

    if (!isLanguageValid) {
      return null;
    }

    setCurrentLanguage(lang);
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    i18n.changeLanguage(lang);
  }, []);

  return {
    currentLanguage,
    changeLanguage,
  };
};
