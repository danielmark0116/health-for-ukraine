import axios from "axios";
import { useQuery } from "react-query";
import API from "../API";
import { QUERY_KEYS } from "./QUERY_KEYS";

// const getInstitutions = async ({queryKeys}) => {
const getInstitutions = async () => {
  const { data } = await axios.get(API.GET.institutions);

  const institutions: HFU.Institution[] = data.institutions || [];

  return institutions;
};

export const useGetInstitutions = () => {
  return useQuery<HFU.Institution[]>(QUERY_KEYS.INSTITUTIONS, {
    queryFn: getInstitutions,
    initialData: [],
  });
};
