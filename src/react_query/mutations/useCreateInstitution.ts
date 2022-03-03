import axios from "axios";
import { useMutation } from "react-query";
import { InstitutionForm } from "../../validators/addInstitution";
import API from "../API";

const createInstitution = async (formData: InstitutionForm) => {
  const { data } = await axios.post(API.POST.institutions, formData);

  const institution: HFU.Institution = data.institution;

  return institution;
};

export const useCreateInstitution = () => {
  return useMutation<HFU.Institution, unknown, InstitutionForm>(
    createInstitution,
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (errs) => {
        console.log({ errs });
      },
    }
  );
};
