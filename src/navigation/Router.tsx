import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { MainMedicPage } from "../pages/mainMedicPage/MainMedicPage";
import { MainRefugeePage } from "../pages/mainRefugeePage/MainRefugeePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainRefugeePage />} />
          <Route path="/medic" element={<MainMedicPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
