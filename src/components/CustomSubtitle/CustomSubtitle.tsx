import { Text, TextProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const CustomSubtitle = ({
  children,
  ...textProps
}: PropsWithChildren<TextProps>) => {
  return (
    <Text fontWeight="bold" fontSize="lg" color={"gray.500"} {...textProps}>
      {children}
    </Text>
  );
};
