import { useEffect } from "react";
import { useGetInstitutions } from "../../react_query/queries/useGetInstitutions";
import { MedicalPlaceCard } from "./components/MedicalPlaceCard/MedicalPlaceCard";

export const MedicalPlacesNewPage = () => {
  const { data: institutions, refetch: getInstitutions } = useGetInstitutions();

  useEffect(() => {
    getInstitutions();
  }, [getInstitutions]);

  return (
    <>
      {(institutions || []).map((i) => (
        <MedicalPlaceCard key={i.id} institution={i} />
      ))}
    </>
  );
};
