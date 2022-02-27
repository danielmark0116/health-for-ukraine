import "./utils/i18n";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Router } from "./navigation/Router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
);
