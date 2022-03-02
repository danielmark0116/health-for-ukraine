import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { cacheTime: "Infinity" as any, staleTime: 20000 },
  },
});
