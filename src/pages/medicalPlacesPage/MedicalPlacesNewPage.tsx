import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "../../components/Loader/Loader";
import { Result } from "../../components/Result/Result";
import { useGetInstitutionsStateMachine } from "../../hooks/stateMachines/useGetInstitutionsStateMachine";
import { QueryFilter } from "../../types/queryFilter";
import { MedicalPlaceCard } from "./components/MedicalPlaceCard/MedicalPlaceCard";
import { MedicalPlacesFilters } from "./components/MedicalPlacesFilters/MedicalPlacesFilters";

const Refetching = () => {
  return <Loader />;
};

const NoData = () => {
  const { t } = useTranslation();

  return (
    <Result
      title={t("institutionsListPage.noData")}
      type="info"
      subtitle={t("institutionsListPage.tryDifferentFilters")}
    />
  );
};

export const MedicalPlacesNewPage = () => {
  const [filters, setFilters] = useState<QueryFilter[]>([]);
  const state = useGetInstitutionsStateMachine(filters);

  return (
    <>
      <Box w="100%" maxW="90vw">
        <MedicalPlacesFilters onFiltersUpdate={setFilters} />
      </Box>
      {["IDLE", "LOADING"].includes(state.type) ? <Loader /> : null}
      {state.type === "NO_DATA" ? <NoData /> : null}
      {state.type === "REFETCHING" ? <Refetching /> : null}
      {state.type === "DATA_FETCHED"
        ? state.data.map((i) => <MedicalPlaceCard key={i.id} institution={i} />)
        : null}
    </>
  );
};
