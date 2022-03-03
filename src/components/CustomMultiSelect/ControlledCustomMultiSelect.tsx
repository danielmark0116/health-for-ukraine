import { Path, useController, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CustomSelectOption } from "../CustomSelect/CustomSelect";
import { CustomMultiSelect, CustomMultiSelectProps } from "./CustomMultiSelect";

interface Props<T> extends CustomMultiSelectProps {
  name: Path<T>;
}

export const ControlledCustomMultiSelect = <T,>({
  name,
  ...customMultiSelectProps
}: Props<T>) => {
  const { t } = useTranslation();
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const onSelect = (selected: CustomSelectOption[]) => {
    field.onChange(selected.map((s) => s.value));
  };

  return (
    <CustomMultiSelect
      name={name}
      isError={!!error?.message}
      errorMsg={t(error?.message || ("" as any))}
      onBlur={field.onBlur}
      onSelect={onSelect}
      {...customMultiSelectProps}
    />
  );
};
