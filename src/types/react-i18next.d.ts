import "react-i18next";
import pl from "../locales/pl/translations.json";

declare module "react-i18next" {
  interface Resources {
    pl: typeof pl;
  }
}
