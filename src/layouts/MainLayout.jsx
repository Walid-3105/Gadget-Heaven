import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
  return (
    <div>
      <Toaster></Toaster>
      <div className="h-16">
        <NavBar></NavBar>
      </div>
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
