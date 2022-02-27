import { Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={3}>
      <Text fontSize="4xl">{t("contactPage.title")}</Text>
      <Text fontSize="2xl">healthforukraine@gmail.com</Text>
      <Text fontSize="sm">{t("contactPage.orgMatters")}</Text>
      <Text fontSize="sm">{t("contactPage.technicalMatters")}</Text>
      <br />
      <br />
      <Text fontSize="xs">{t("contactPage.hintOnAppointments")}</Text>
      <Text fontSize="xs">{t("contactPage.contactWithPlaces")}</Text>
    </Stack>
  );
};
