import { FormProvider, useForm } from "react-hook-form";
import { ControlledCustomTextInput } from "../../../components/CustomTextInput/ControlledCustomTextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InstitutionForm,
  InstitutionSchema,
} from "../../../validators/addInstitution";
import { useTranslation } from "react-i18next";
import { professions } from "../../../constants/professions";
import { ControlledCustomSelect } from "../../../components/CustomSelect/ControlledCustomSelect";
import { ControlledCustomMultiSelect } from "../../../components/CustomMultiSelect/ControlledCustomMultiSelect";
import { languages } from "../../../constants/languages";
import { voivodeships } from "../../../constants/voivodeships";
import { CustomButton } from "../../../components/CustomButton/CustomButton";
import { serviceTypes } from "../../../constants/serviceTypes";
import { specialities } from "../../../constants/specialities";
import { useCreateInstitution } from "../../../react_query/mutations/useCreateInstitution";
import { Result } from "../../../components/Result/Result";
import { ControlledHereApiAutocomplete } from "../../../components/HereApiAutocomplete/ControlledHereApiAutocomplete";

export const AddInstituteForm = () => {
  const {
    mutateAsync: createInstitution,
    isSuccess,
    isError,
    reset,
  } = useCreateInstitution();
  const { t } = useTranslation();

  const form = useForm<InstitutionForm>({
    resolver: zodResolver(InstitutionSchema),
    mode: "onBlur",
  });

  const profession = form.watch("profession");

  const handleSubmit = (data: InstitutionForm) => {
    (async () => {
      try {
        await createInstitution({ ...data, city: data.locationId });
        form.reset();
      } catch (e) {
        //
      }
    })();
  };

  const handleErrors = () => {
    //
  };

  if (isSuccess) {
    return (
      <Result
        type="success"
        title={t("addInstitutionPage.successTitle")}
        subtitle={t("addInstitutionPage.successSubtitle")}
        withButton={[t("ok"), reset]}
      />
    );
  }

  if (isError) {
    return (
      <Result
        type="error"
        title={t("genericError")}
        withButton={[t("ok"), reset]}
      />
    );
  }

  return (
    <>
      <FormProvider {...form}>
        <ControlledCustomTextInput<InstitutionForm>
          name="name"
          labelText={t("addInstitutionPage.form.nameLabel")}
          helperText={t("addInstitutionPage.form.nameHelper")}
        />
        <ControlledCustomTextInput<InstitutionForm>
          name="email"
          labelText={t("addInstitutionPage.form.emailLabel")}
          helperText={t("addInstitutionPage.form.emailHelper")}
        />
        <ControlledCustomTextInput<InstitutionForm>
          name="institutionName"
          labelText={t("addInstitutionPage.form.institutionNameLabel")}
          helperText={t("addInstitutionPage.form.institutionNameHelper")}
        />
        <ControlledCustomSelect<InstitutionForm>
          name="profession"
          labelText={t("addInstitutionPage.form.professionLabel")}
          placeholder={t("addInstitutionPage.form.professionPlaceholder")}
          errorMsg={t("validation.incorrectProfession")}
          options={professions.map((p) => ({
            value: p,
            label: t(`professions.${p}` as any),
          }))}
        />
        <ControlledCustomSelect<InstitutionForm>
          name="speciality"
          isDisabled={profession !== "doctor"}
          placeholder={"..."}
          labelText={t("addInstitutionPage.form.specialtyLabel")}
          helperText={t("addInstitutionPage.form.specialtyHelper")}
          errorMsg={t("validation.incorrectProfession")}
          options={specialities.map((s) => ({
            value: s,
            label: t(`specialities.${s}` as any),
          }))}
        />
        <ControlledCustomMultiSelect<InstitutionForm>
          name="serviceType"
          labelText={t("addInstitutionPage.form.serviceTypeLabel")}
          helperText={t("addInstitutionPage.form.serviceTypeHelper")}
          placeholder="..."
          options={serviceTypes.map((st) => ({
            value: st,
            label: t(`serviceTypes.${st}` as any),
          }))}
        />
        <ControlledCustomMultiSelect<InstitutionForm>
          name="languages"
          labelText={t("addInstitutionPage.form.languageInfoLabel")}
          helperText={t("addInstitutionPage.form.languageInfoHelper")}
          placeholder={t("addInstitutionPage.form.languageInfoPlaceholder")}
          options={languages.map((l) => ({
            value: l,
            label: t(`languages.${l}`),
          }))}
        />
        <ControlledCustomTextInput<InstitutionForm>
          name="addressString"
          asTextarea
          labelText={t("addInstitutionPage.form.addressStringLabel")}
          helperText={t("addInstitutionPage.form.addressStringHelper")}
        />
        <ControlledCustomSelect<InstitutionForm>
          name="voivodeship"
          labelText={t("addInstitutionPage.form.voivodeshipLabel")}
          placeholder={"..."}
          errorMsg={t("validation.incorrectVoivodeship")}
          options={voivodeships.map((v) => ({
            value: v,
            label: t(`voivodeships.${v}` as any),
          }))}
        />
        <ControlledHereApiAutocomplete<InstitutionForm>
          name="locationId"
          labelText={t("addInstitutionPage.form.cityLabel")}
          helperText={t("addInstitutionPage.form.cityHelper")}
        />
        <ControlledCustomTextInput<InstitutionForm>
          name="postCode"
          labelText={t("addInstitutionPage.form.postCodeLabel")}
          helperText={t("addInstitutionPage.form.postCodeHelper")}
        />
        <ControlledCustomTextInput<InstitutionForm>
          name="contactData"
          asTextarea
          labelText={t("addInstitutionPage.form.contactDataLabel")}
          helperText={t("addInstitutionPage.form.contactDataHelper")}
        />
        <ControlledCustomTextInput<InstitutionForm>
          name="hours"
          asTextarea
          labelText={t("addInstitutionPage.form.hoursLabel")}
          helperText={t("addInstitutionPage.form.hoursHelper")}
        />
      </FormProvider>

      <CustomButton onClick={form.handleSubmit(handleSubmit, handleErrors)}>
        {t("submit")}
      </CustomButton>
    </>
  );
};
