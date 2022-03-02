import "./utils/i18n";
import { Router } from "./navigation/Router";
import { GlobalProviders } from "./providers/GlobalProviders";

export const App = () => (
  <GlobalProviders>
    <Router />
  </GlobalProviders>
);
