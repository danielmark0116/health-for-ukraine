import { Heading, HeadingProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const CustomTitle = ({
  children,
  ...headingProps
}: PropsWithChildren<HeadingProps>) => {
  return (
    <Heading as="h1" fontSize="4xl" {...headingProps}>
      {children}
    </Heading>
  );
};
