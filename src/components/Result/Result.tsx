import { CheckCircleIcon, CloseIcon, InfoIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import { CustomButton } from "../CustomButton/CustomButton";
import { CustomText } from "../CustomText/CustomText";
import { CustomTitle } from "../CustomTitle/CustomTitle";

interface Props {
  title: string;
  subtitle?: string;
  type?: "success" | "error" | "info";
  withButton?: [string, F0];
}

const renderIcon = (type: Props["type"]) => {
  switch (type) {
    case "success":
      return <CheckCircleIcon boxSize={"50px"} color={"green.500"} />;
    case "info":
      return <InfoIcon boxSize={"50px"} color={"cyan.500"} />;
    case "error":
      return (
        <Box display="inline-block">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={"red.500"}
            rounded={"50px"}
            w={"55px"}
            h={"55px"}
            textAlign="center"
          >
            <CloseIcon boxSize={"20px"} color={"white"} />
          </Flex>
        </Box>
      );
    default:
      return null;
  }
};

export const Result = ({ title, subtitle, type, withButton }: Props) => {
  return (
    <Box textAlign="center" py={10} px={6}>
      {renderIcon(type)}
      <CustomTitle mt={6} mb={2}>
        {title}
      </CustomTitle>
      <CustomText mt={6} color={"gray.500"} px={12}>
        {subtitle || ""}
      </CustomText>
      {withButton && (
        <CustomButton mt={8} onClick={withButton[1]}>
          {withButton[0]}
        </CustomButton>
      )}
    </Box>
  );
};
