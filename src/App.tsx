import { ChakraProvider, theme } from "@chakra-ui/react";
import { Layout } from "./layout/Layout";
import translationsPL from "./locales/pl/translations.json";
import translationsUA from "./locales/ua/translations.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Router } from "./navigation/Router";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      pl: {
        translation: translationsPL,
      },
      ua: {
        translation: translationsUA,
      },
    },
    lng: "pl", // if you're using a language detector, do not define the lng option
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Router />
    </Layout>
  </ChakraProvider>
);
