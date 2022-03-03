import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const MOCK_PROFILE_PIC_URL =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

interface Props {
  institution: HFU.Institution;
}

export const MedicalPlaceCard = ({ institution }: Props) => {
  const color = useColorModeValue("gray.50", "gray.800");
  const languageBgColor = useColorModeValue("blue.100", "blue.500");
  const { t } = useTranslation();
  const {
    voivodeship,
    name,
    city,
    email,
    hours,
    postCode,
    speciality,
    profession,
    contactData,
    serviceType,
    languages,
    addressString,
    institutionName,
  } = institution;

  return (
    <Center py={4}>
      <Box
        w={"90vw"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={MOCK_PROFILE_PIC_URL}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {institutionName}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {name}
        </Text>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("green.400", "green.800")}
            color="white"
            fontWeight={"700"}
          >
            {t(`professions.${profession}` as any)}
          </Badge>
          <Badge
            px={2}
            py={1}
            display={speciality ? "flex" : "none"}
            bg={useColorModeValue("green.400", "green.800")}
            color="white"
            fontWeight={"700"}
          >
            {t(`specialities.${speciality}` as any)}
          </Badge>
        </Stack>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          {serviceType.map((st) => (
            <Badge key={st} px={2} py={1} bg={color} fontWeight={"400"}>
              {t(`serviceTypes.${st}` as any)}
            </Badge>
          ))}
        </Stack>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          {languages.map((l) => (
            <Badge
              key={l}
              px={2}
              py={1}
              bg={languageBgColor}
              fontWeight={"400"}
            >
              {t(`languages.${l}` as any)}
            </Badge>
          ))}
        </Stack>

        <SimpleGrid columns={[1, null, 2]} spacing={"40px"} mt={6}>
          <Box w="100%">
            <Heading textAlign="left" as="h6" size="md" mb={2}>
              {t("address")}
            </Heading>
            <Text
              textAlign={"left"}
              color={useColorModeValue("gray.700", "gray.400")}
              fontSize={"sm"}
            >
              {addressString}
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"sm"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {postCode + " " + city}
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"sm"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {t(`voivodeships.${voivodeship}` as any)}
            </Text>
          </Box>

          <Box w="100%">
            <Heading textAlign="left" as="h6" size="md" mb={2}>
              {t("contact")}
            </Heading>
            <Text
              textAlign={"left"}
              fontSize={"sm"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {contactData}
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"sm"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {email}
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"sm"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {hours}
            </Text>
          </Box>
        </SimpleGrid>

        {/* <Stack mt={8} direction={"row"} spacing={4}> */}
        {/*   <Button */}
        {/*     flex={1} */}
        {/*     fontSize={"sm"} */}
        {/*     rounded={"full"} */}
        {/*     _focus={{ */}
        {/*       bg: "gray.200", */}
        {/*     }} */}
        {/*   > */}
        {/*     Message */}
        {/*   </Button> */}
        {/*   <Button */}
        {/*     flex={1} */}
        {/*     fontSize={"sm"} */}
        {/*     rounded={"full"} */}
        {/*     bg={"blue.400"} */}
        {/*     color={"white"} */}
        {/*     boxShadow={ */}
        {/*       "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)" */}
        {/*     } */}
        {/*     _hover={{ */}
        {/*       bg: "blue.500", */}
        {/*     }} */}
        {/*     _focus={{ */}
        {/*       bg: "blue.500", */}
        {/*     }} */}
        {/*   > */}
        {/*     Follow */}
        {/*   </Button> */}
        {/* </Stack> */}
      </Box>
    </Center>
  );
};
