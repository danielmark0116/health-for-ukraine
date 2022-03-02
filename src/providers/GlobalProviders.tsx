import { memo, PropsWithChildren } from "react";
import { SessionProvider } from "./SessionProvider";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../react_query/queryClient";

export const GlobalProviders = memo(
  ({ children }: PropsWithChildren<unknown>) => {
    return (
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>{children}</SessionProvider>;
        </QueryClientProvider>
      </ChakraProvider>
    );
  }
);
