import { PropsWithChildren } from "react";
import { Box, VStack, Grid } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Box textAlign="center" minHeight={"97vh"} fontSize="xl" pb={[205, 205, 175]}>
      <Navbar />
      <Grid p={3}>
        <VStack flex={1} spacing={8}>
          {children}
        </VStack>
      </Grid>
      <Footer />
    </Box>
  );
};
