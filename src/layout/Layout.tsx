import { PropsWithChildren } from "react";
import { Box, VStack, Grid } from "@chakra-ui/react";
import Navbar from "./Navbar";

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Navbar />
        <VStack flex={1} spacing={8}>
          {children}
        </VStack>
      </Grid>
    </Box>
  );
};
