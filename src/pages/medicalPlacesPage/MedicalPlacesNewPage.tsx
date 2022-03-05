import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useGetInstitutions } from "../../react_query/queries/useGetInstitutions";
import { QueryFilter } from "../../types/queryFilter";
import { MedicalPlaceCard } from "./components/MedicalPlaceCard/MedicalPlaceCard";
import { MedicalPlacesFilters } from "./components/MedicalPlacesFilters/MedicalPlacesFilters";

export const MedicalPlacesNewPage = () => {
  const [filters, setFilters] = useState<QueryFilter[]>([]);
  const { data: institutions, refetch: getInstitutions } =
    useGetInstitutions(filters);

  useEffect(() => {
    getInstitutions();
  }, [getInstitutions, filters]);

  return (
    <>
      <Box w="100%" maxW="90vw">
        <MedicalPlacesFilters onFiltersUpdate={setFilters} />
      </Box>
      {(institutions || []).map((i) => (
        <MedicalPlaceCard key={i.id} institution={i} />
      ))}
    </>
  );
};
