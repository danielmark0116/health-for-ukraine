import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CustomText } from "../components/CustomText/CustomText";
import LogoPic from "../assets/logo_400x400.png";

export const Logo = (props: any) => {
  return <Image height={24} src={LogoPic} {...props} />;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Logo />
          <Stack fontSize="sm" direction={"row"} spacing={6}>
            <Link to={"/"}>{t("navigation.forRefugee")}</Link>
            <Link to={"/medic"}>{t("navigation.forMedic")}</Link>
            <Link to={"/contact"}>{t("navigation.contact")}</Link>
          </Stack>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <CustomText>© 2022 Health For Ukraine</CustomText>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Facebook"}
                href={
                  "https://www.facebook.com/Health-For-Ukraine-101445582495040"
                }
              >
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};
