import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { ContactPage } from "../pages/contactPage/ContactPage";
import { MainMedicPage } from "../pages/mainMedicPage/MainMedicPage";
import { MainRefugeePage } from "../pages/mainRefugeePage/MainRefugeePage";
import { MedicalPlacesPage } from "../pages/medicalPlacesPage/MedicalPlaces";
import { MedicalPlacesNewPage } from "../pages/medicalPlacesPage/MedicalPlacesNewPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/medic" element={<MainMedicPage />} />
          {/* <Route path="/places" element={<MedicalPlacesPage />} /> */}
          <Route path="/places" element={<MedicalPlacesNewPage />} />
          <Route path="/" element={<MainRefugeePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
