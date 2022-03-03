import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { AddInstitutionPage } from "../pages/addInstitutionPage/AddInstitutionPage";
import { ContactPage } from "../pages/contactPage/ContactPage";
import { MainMedicPage } from "../pages/mainMedicPage/MainMedicPage";
import { MainRefugeePage } from "../pages/mainRefugeePage/MainRefugeePage";
import { MedicalPlacesNewPage } from "../pages/medicalPlacesPage/MedicalPlacesNewPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/medic" element={<MainMedicPage />} />
          <Route path="/places" element={<MedicalPlacesNewPage />} />
          <Route path="/institutions/add" element={<AddInstitutionPage />} />
          <Route path="/" element={<MainRefugeePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
