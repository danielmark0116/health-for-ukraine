import { Box } from "@chakra-ui/react";
import {
  CustomTextInput,
  CustomTextInputProps,
} from "../CustomTextInput/CustomTextInput";
import { motion } from "framer-motion";
import { useCustomAutocompleteControl } from "./useCustomAutocompleteControl";
import { CustomSelectOption } from "../CustomSelect/CustomSelect";
import { CustomText } from "../CustomText/CustomText";
import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";

export interface CustomAutocompleteProps
  extends Omit<CustomTextInputProps, "onSelect" | "onBlur"> {
  items: CustomSelectOption[];
  onSelect?: F1<CustomSelectOption>;
  onBlur?: F0;
}

export const CustomAutocomplete = ({
  items,
  onSelect,
  onBlur,
  ...textInputProps
}: CustomAutocompleteProps) => {
  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [state, { focus, blur, select }] = useCustomAutocompleteControl(items);

  const shouldOpen = ["ACTIVE_WITH_DATA"].includes(state.type);

  const selectedOption = (state as any)?.selected as
    | CustomSelectOption
    | undefined;

  const handleBlur = () => {
    blur(onBlur);
  };

  useClickOutside(wrapperRef, handleBlur);

  const notFoundText =
    state.type === "ACTIVE_WITHOUT_DATA" &&
    String(textInputProps?.value || "").length >= 3
      ? t("notFound")
      : "";

  const selectedText = selectedOption
    ? `Wybrano: ${selectedOption.label}`
    : null;

  const handleSelect = (selected: CustomSelectOption) => {
    return () => {
      onSelect?.(selected);
      select(selected);
      onBlur?.();
    };
  };

  return (
    <Box w="100%" ref={wrapperRef} zIndex={2}>
      <CustomTextInput
        onFocus={focus}
        textColor={selectedOption ? "inherit" : "gray.500"}
        {...textInputProps}
        helperText={selectedText || textInputProps.helperText || notFoundText}
      />

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: shouldOpen ? "auto" : 0,
          opacity: shouldOpen ? 1 : 0,
        }}
        style={{ width: "100%", zIndex: 100, marginTop: -8, marginBottom: 0 }}
      >
        <Box
          w="100%"
          backgroundColor="white"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          h="100%"
        >
          {state.type === "ACTIVE_WITH_DATA" &&
            state.data.map((d) => (
              <CustomText
                key={d.value}
                align="left"
                p={4}
                fontWeight="800"
                backgroundColor={
                  selectedOption?.value === d.value ? "gray.50" : undefined
                }
                _hover={{ backgroundColor: "gray.50", cursor: "pointer" }}
                onClick={handleSelect(d)}
              >
                {d.label}
              </CustomText>
            ))}
        </Box>
      </motion.div>
    </Box>
  );
};
