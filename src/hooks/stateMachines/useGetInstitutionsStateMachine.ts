import { useEffect, useState } from "react";
import { useGetInstitutions } from "../../react_query/queries/useGetInstitutions";
import { QueryFilter } from "../../types/queryFilter";

type GetInstitutionsState =
  | {
      type: "IDLE";
    }
  | { type: "LOADING" }
  | { type: "DATA_FETCHED"; data: HFU.Institution[] }
  | { type: "NO_DATA" }
  | { type: "REFETCHING" };

export const useGetInstitutionsStateMachine = (filters: QueryFilter[]) => {
  // if it contained some more methods, user invoked, we can use assertState at the beginning of a function
  const [state, setState] = useState<GetInstitutionsState>({ type: "IDLE" });

  const {
    data: institutions,
    refetch: getInstitutions,
    isSuccess,
    isFetched,
  } = useGetInstitutions(filters);

  useEffect(() => {
    setState((prev) =>
      prev.type === "IDLE" ? { type: "LOADING" } : { type: "REFETCHING" }
    );
    getInstitutions();
  }, [getInstitutions, filters]);

  useEffect(() => {
    switch (true) {
      case isSuccess && isFetched && !institutions?.length:
        setState({ type: "NO_DATA" });
        break;
      case institutions?.length && isSuccess:
        setState({ type: "DATA_FETCHED", data: institutions! });
        break;
    }
  }, [institutions, isSuccess, isFetched]);

  return state;
};
