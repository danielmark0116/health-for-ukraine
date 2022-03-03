import { PropsWithChildren } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { Select, Props } from "chakra-react-select";
import { CustomSelectOption } from "../CustomSelect/CustomSelect";

export interface CustomMultiSelectProps extends Omit<Props, "onSelect"> {
  isError?: boolean;
  errorMsg?: string;
  labelText: string;
  helperText?: string;
  name: string;
  options: CustomSelectOption[];
  onSelect?: F1<CustomSelectOption[]>;
}

export const CustomMultiSelect = ({
  isError,
  errorMsg,
  labelText,
  helperText,
  name,
  options,
  onSelect,
  ...selectProps
}: PropsWithChildren<CustomMultiSelectProps>) => {
  return (
    <FormControl textAlign={"left"} isInvalid={isError} pb={4}>
      <FormLabel fontWeight="bold" fontSize="sm" htmlFor={name}>
        {labelText}
      </FormLabel>
      <Select
        isMulti
        closeMenuOnSelect={false}
        id={name}
        onChange={(options) => {
          onSelect?.(options as CustomSelectOption[]);
        }}
        options={options}
        {...selectProps}
      />
      {!isError ? (
        <FormHelperText fontSize="xs">{helperText || ""}</FormHelperText>
      ) : (
        <FormErrorMessage fontSize="xs">{errorMsg || ""}</FormErrorMessage>
      )}
    </FormControl>
  );
};
