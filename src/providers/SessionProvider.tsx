import axios from "axios";
import { createContext, memo, PropsWithChildren, useLayoutEffect } from "react";

const SessionContext = createContext(null);

export const SessionProvider = memo(
  ({ children }: PropsWithChildren<unknown>) => {
    useLayoutEffect(() => {
      axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    }, []);

    return (
      <SessionContext.Provider value={null}>{children}</SessionContext.Provider>
    );
  }
);
