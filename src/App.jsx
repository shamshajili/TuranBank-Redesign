import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

import Home from "./pages/Home";
import MobileBanking from "./pages/MobileBanking";
import InternetBanking from "./pages/InternetBanking";

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mobile-banking" element={<MobileBanking />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/internet-banking" element={<InternetBanking />} />
      </Route>

    </Routes>
  );
}

export default App;
