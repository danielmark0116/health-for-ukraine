import { Box, Divider, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { CustomText } from "../../components/CustomText/CustomText";
import { CustomTitle } from "../../components/CustomTitle/CustomTitle";
import { AddInstituteForm } from "./components/AddInstitutionForm";

export const AddInstitutionPage = () => {
  const { t } = useTranslation();

  return (
    <Box py={4}>
      <VStack textAlign="center">
        <CustomTitle mb={4}>{t("addInstitutionPage.title")}</CustomTitle>
        <CustomText maxW="700px">{t("addInstitutionPage.subtitle")}</CustomText>
        <Divider pt={4} mb={8} />
        <Box mt={8} h={1} />
        <AddInstituteForm />
      </VStack>
    </Box>
  );
};
