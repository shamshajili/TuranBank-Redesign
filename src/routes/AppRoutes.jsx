import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import OurBank from "../pages/OurBank";
import MobileBanking from "../pages/MobileBanking";
import InternetBanking from "../pages/InternetBanking";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-bank" element={<OurBank />} />
        <Route path="/mobile-banking" element={<MobileBanking />} />
        <Route path="/internet-banking" element={<InternetBanking />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
