import { useTranslation } from "react-i18next";
import {
  CustomSelect,
  CustomSelectOption,
} from "../../../../components/CustomSelect/CustomSelect";
import { voivodeships } from "../../../../constants/voivodeships";
import { QueryFilter } from "../../../../types/queryFilter";

interface Props {
  onFiltersUpdate: F1<QueryFilter[]>;
}

export const MedicalPlacesFilters = ({ onFiltersUpdate }: Props) => {
  const { t } = useTranslation();

  const onSelect = (option: CustomSelectOption) => {
    onFiltersUpdate([{ value: option.value, type: "voivodeship" }]);
  };

  return (
    <>
      <CustomSelect
        name="voivodeship"
        onSelect={onSelect}
        options={["all", ...voivodeships].map((v) => ({
          value: v === "all" ? "*" : v,
          label: t(`voivodeships.${v}` as any),
        }))}
        labelText={t("voivodeship")}
        helperText={t("institutionsListPage.filters.voivodeshipHelper")}
      />
    </>
  );
};
