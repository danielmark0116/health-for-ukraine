import { Path, useController, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CustomSelectOption } from "../CustomSelect/CustomSelect";
import {
  HereApiAutocomplete,
  HereApiAutocompleteProps,
} from "./HereApiAutocomplete";

interface Props<T> extends HereApiAutocompleteProps {
  name: Path<T>;
}

export const ControlledHereApiAutocomplete = <T,>({
  name,
  ...customTextInputProps
}: Props<T>) => {
  const { t } = useTranslation();
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const onSelect = (selected: CustomSelectOption) => {
    field.onChange(selected.value);
  };

  return (
    <HereApiAutocomplete
      name={name}
      isError={!!error?.message}
      errorMsg={t(error?.message || ("" as any))}
      onBlur={field.onBlur}
      onSelect={onSelect}
      {...customTextInputProps}
    />
  );
};
