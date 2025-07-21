import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <Outlet />
      <div className="max-w-7xl mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
