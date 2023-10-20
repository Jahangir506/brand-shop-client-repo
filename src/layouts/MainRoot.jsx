import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Header/Navbar";

const MainRoot = () => {
  return (
    <div className="dark:bg-black/75 dark:text-white">
      <div className="fixed top-0 w-full z-50 shadow-md">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainRoot;
