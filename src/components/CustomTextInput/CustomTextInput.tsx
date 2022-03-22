import { PropsWithChildren, SyntheticEvent, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
  Textarea,
} from "@chakra-ui/react";

export interface CustomTextInputProps extends InputProps {
  isError?: boolean;
  asTextarea?: boolean;
  errorMsg?: string;
  labelText: string;
  helperText?: string;
  name: string;
}

export const CustomTextInput = ({
  isError,
  errorMsg,
  labelText,
  helperText,
  name,
  asTextarea,
  ...inputProps
}: PropsWithChildren<CustomTextInputProps>) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: SyntheticEvent) => {
    setInput(e.currentTarget.nodeValue || "");
  };

  return (
    <FormControl textAlign={"left"} isInvalid={isError} pb={4}>
      <FormLabel fontWeight="bold" fontSize="sm" htmlFor={name}>
        {labelText}
      </FormLabel>
      <Input
        id={name}
        as={asTextarea ? Textarea : undefined}
        value={input}
        onChange={handleInputChange}
        {...inputProps}
      />
      {!isError ? (
        <FormHelperText fontSize="xs">{helperText || ""}</FormHelperText>
      ) : (
        <FormErrorMessage fontSize="xs">{errorMsg || ""}</FormErrorMessage>
      )}
    </FormControl>
  );
};
