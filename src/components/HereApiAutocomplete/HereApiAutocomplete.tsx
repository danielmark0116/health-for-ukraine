import { ChangeEventHandler, useEffect, useState } from "react";
import { useSearchCities } from "../../react_query/queries/useSearchCities";
import {
  CustomAutocomplete,
  CustomAutocompleteProps,
} from "../CustomAutocomplete/CustomAutocomplete";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";

export interface HereApiAutocompleteProps
  extends Omit<CustomAutocompleteProps, "items"> {
  name: string;
}

export const HereApiAutocomplete = ({
  name,
  onSelect: controlledOnSelect,
  onBlur: controlledOnBlur,
  ...autocompleteProps
}: HereApiAutocompleteProps) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const searchValue = useDebouncedValue(inputValue, 200);
  const { data, refetch } = useSearchCities(searchValue);

  useEffect(() => {
    refetch();
  }, [searchValue, refetch]);

  useEffect(() => {
    setSelected("");
  }, [data]);

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget,
  }) => {
    setInputValue(currentTarget.value);
  };

  return (
    <CustomAutocomplete
      name={name}
      items={(data || []).map((c) => ({ label: c.title, value: c.id }))}
      value={selected || inputValue}
      onChange={onChange}
      onSelect={(selected) => {
        setSelected(selected.label);
        controlledOnSelect?.(selected);
      }}
      onBlur={controlledOnBlur}
      {...autocompleteProps}
    />
  );
};
