import { Path, useController, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CustomTextInput, CustomTextInputProps } from "./CustomTextInput";

interface Props<T> extends CustomTextInputProps {
  name: Path<T>;
}

export const ControlledCustomTextInput = <T,>({
  name,
  ...customTextInputProps
}: Props<T>) => {
  const { t } = useTranslation();
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <CustomTextInput
      name={name}
      value={field.value || ""}
      onChange={field.onChange}
      isError={!!error?.message}
      errorMsg={t(error?.message || ("" as any))}
      onBlur={field.onBlur}
      {...customTextInputProps}
    />
  );
};
