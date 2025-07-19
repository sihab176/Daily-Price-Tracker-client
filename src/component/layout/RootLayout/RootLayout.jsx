import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
