import axios from "axios";
import { QueryFunctionContext, useQuery } from "react-query";
import API from "../API";
import { QUERY_KEYS } from "./QUERY_KEYS";

type QueryKey = [QUERY_KEYS.HERE_API_PLACES, string];

const getCitiesSuggestions = async ({
  queryKey,
}: QueryFunctionContext<QueryKey>) => {
  if (queryKey[1].length < 3) {
    return [];
  }

  const { data } = await axios.get(API.GET.searchCities(queryKey[1]));

  const cities: HFU.HereCity[] = data.cities || [];

  return cities;
};

export const useSearchCities = (textInput: string) => {
  return useQuery<HFU.HereCity[], unknown, HFU.HereCity[], QueryKey>(
    [QUERY_KEYS.HERE_API_PLACES, textInput],
    {
      queryFn: getCitiesSuggestions,
      initialData: [],
    }
  );
};
