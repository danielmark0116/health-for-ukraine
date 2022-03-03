import { Path, useController, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  CustomSelect,
  CustomSelectOption,
  CustomSelectProps,
} from "./CustomSelect";

interface Props<T> extends CustomSelectProps {
  name: Path<T>;
}

export const ControlledCustomSelect = <T,>({
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
    <CustomSelect
      name={name}
      isError={!!error?.message}
      errorMsg={t(error?.message || ("" as any))}
      onBlur={field.onBlur}
      onSelect={onSelect}
      {...customTextInputProps}
    />
  );
};
