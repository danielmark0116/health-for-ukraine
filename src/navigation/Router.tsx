import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainMedicPage } from "../pages/mainMedicPage/MainMedicPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMedicPage />} />
      </Routes>
    </BrowserRouter>
  );
};
