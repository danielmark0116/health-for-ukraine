import { useCallback, useEffect, useState } from "react";
import { assertState } from "../../utils/assertState";
import { CustomSelectOption } from "../CustomSelect/CustomSelect";

type CustomAutocompleteControlStateMachine =
  | { type: "IDLE" }
  | { type: "ACTIVE"; selected?: CustomSelectOption } // user started typing, no results
  | { type: "ACTIVE_WITHOUT_DATA"; selected?: CustomSelectOption } // user started typing, no results
  | {
      type: "ACTIVE_WITH_DATA";
      data: CustomSelectOption[];
      selected?: CustomSelectOption;
    } // user started typing, results are shown
  | { type: "INACTIVE_SELECTED"; selected: CustomSelectOption } // user unfocused, selection is active, should be darker text
  | { type: "INACTIVE"; selected?: CustomSelectOption }; // user typed sth, but unfocused and did not select anything
type States = CustomAutocompleteControlStateMachine["type"];

export const useCustomAutocompleteControl = (
  data: CustomSelectOption[]
): [
  CustomAutocompleteControlStateMachine,
  { focus: F0; blur: (cb?: F0) => void; select: F1<CustomSelectOption> }
] => {
  const [state, setState] = useState<CustomAutocompleteControlStateMachine>({
    type: "IDLE",
  });

  const focus = useCallback(() => {
    try {
      assertState<States>(state, "IDLE", "INACTIVE", "INACTIVE_SELECTED");

      const selected = (state as any)?.selected;

      if (!!data.length) {
        setState({ type: "ACTIVE_WITH_DATA", data, selected });
      } else {
        setState({ type: "ACTIVE" });
      }
    } catch (e) {
      //
    }
  }, [state, data]);

  const blur = useCallback(
    (additionalCallback?: F0) => {
      try {
        assertState<States>(
          state,
          "ACTIVE_WITHOUT_DATA",
          "ACTIVE_WITH_DATA",
          "ACTIVE"
        );

        additionalCallback?.();

        if (state.type === "ACTIVE_WITH_DATA" && state.selected) {
          setState({
            type: "INACTIVE_SELECTED",
            selected: state.selected,
          });
        } else {
          setState({ type: "INACTIVE" });
        }
      } catch (e) {
        //
      }
    },
    [state]
  );

  const select = useCallback(
    (selected: CustomSelectOption) => {
      try {
        assertState<States>(state, "ACTIVE_WITH_DATA");

        setState({ type: "INACTIVE_SELECTED", selected: selected });
      } catch (e) {
        //
      }
    },
    [state]
  );

  useEffect(() => {
    setState((prev) => {
      try {
        assertState<States>(
          prev,
          "ACTIVE_WITHOUT_DATA",
          "ACTIVE_WITH_DATA",
          "ACTIVE"
        );

        if (data.length) {
          return { ...prev, type: "ACTIVE_WITH_DATA", data };
        }

        return { ...prev, type: "ACTIVE_WITHOUT_DATA" };
      } catch (e) {
        return prev;
      }
    });
  }, [data]);

  return [state, { focus, blur, select }];
};
