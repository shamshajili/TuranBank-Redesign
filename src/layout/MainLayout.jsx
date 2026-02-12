import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
