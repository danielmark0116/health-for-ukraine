import { PropsWithChildren } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {}

export const CustomButton = ({ children, ...buttonProps }: PropsWithChildren<Props>) => {
  return (
    <Button
      colorScheme={"green"}
      bg={"green.400"}
      rounded={"full"}
      px={6}
      _hover={{
        bg: "green.500",
      }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
