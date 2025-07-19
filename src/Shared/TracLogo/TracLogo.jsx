import React from "react";
import { Link } from "react-router";

const TracLogo = () => {
  return (
   <Link to="/">
    <div className="flex items-center">
      
        <img
          className="h-15 w-16 md:block "
          src="https://i.ibb.co/FbfP4ZmB/logo-2-removebg-preview.png"
          alt=""
        />
     
      <h1 className="text-2xl font-semibold">
        Local<span className="text-orange-600">Harvest</span>
      </h1>
    </div>
   </Link>
  );
};

export default TracLogo;
