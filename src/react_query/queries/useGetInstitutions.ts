import axios from "axios";
import { QueryFunctionContext, useQuery } from "react-query";
import { QueryFilter } from "../../types/queryFilter";
import API from "../API";
import { QUERY_KEYS } from "./QUERY_KEYS";

type QueryKey = [QUERY_KEYS.INSTITUTIONS, string];

const getInstitutions = async ({ queryKey }: QueryFunctionContext<any>) => {
  const { data } = await axios.get(API.GET.institutions + "?" + queryKey[1]);

  const institutions: HFU.Institution[] = data.institutions || [];

  return institutions;
};

export const useGetInstitutions = (filters: QueryFilter[]) => {
  const queryFiltersString = filters
    .map((f) => `${f.type}=${f.value}&`)
    .join("");

  return useQuery<HFU.Institution[]>(
    [QUERY_KEYS.INSTITUTIONS, queryFiltersString] as QueryKey,
    {
      queryFn: getInstitutions,
      initialData: [],
    }
  );
};
