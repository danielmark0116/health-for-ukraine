import { PropsWithChildren, SyntheticEvent } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
  SelectProps,
} from "@chakra-ui/react";

export type CustomSelectOption = {
  value: string;
  label: string;
};

export interface CustomSelectProps extends Omit<SelectProps, "onSelect"> {
  isError?: boolean;
  errorMsg?: string;
  labelText: string;
  helperText?: string;
  name: string;
  options: CustomSelectOption[];
  onSelect?: F1<CustomSelectOption>;
}

export const CustomSelect = ({
  isError,
  errorMsg,
  labelText,
  helperText,
  name,
  options,
  onSelect,
  ...selectProps
}: PropsWithChildren<CustomSelectProps>) => {
  const handleSelect = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLSelectElement;
    const value = target.selectedOptions[0].value;
    const selectedOption = options.find((o) => o.value === value);

    if (selectedOption) {
      onSelect?.(selectedOption);
    }
  };

  return (
    <FormControl textAlign={"left"} isInvalid={isError} pb={4}>
      <FormLabel fontWeight="bold" fontSize="sm" htmlFor={name}>
        {labelText}
      </FormLabel>
      <Select id={name} onChange={handleSelect} {...selectProps}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </Select>
      {!isError ? (
        <FormHelperText fontSize="xs">{helperText || ""}</FormHelperText>
      ) : (
        <FormErrorMessage fontSize="xs">{errorMsg || ""}</FormErrorMessage>
      )}
    </FormControl>
  );
};
