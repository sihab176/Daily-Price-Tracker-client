import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";

const RootLayout = () => {
  return (
    <div className=" max-w-[1440px] mx-auto md:px-4">
      <div className=" sticky z-10 top-0 ">
        <Navbar />
      </div>
      <Outlet />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
