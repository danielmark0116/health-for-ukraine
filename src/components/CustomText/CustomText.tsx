import { Text, TextProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const CustomText = ({
  children,
  ...textProps
}: PropsWithChildren<TextProps>) => {
  return (
    <Text fontSize="xs" {...textProps}>
      {children}
    </Text>
  );
};
