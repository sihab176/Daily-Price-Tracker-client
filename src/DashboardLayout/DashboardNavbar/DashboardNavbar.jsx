import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DashboardNavbar = () => {
  const { user } = use(AuthContext);
  //   console.log(user);
  return (
    <div>
      <div className="flex justify-between px-4 py-4 bg-base-200 shadow shadow-gray-100">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <img
          className="rounded-full md:w-10 w-7 h-7 md:h-10 border-2 border-teal-700"
          src={user?.photoURL}
          alt="user"
        />
      </div>
    </div>
  );
};

export default DashboardNavbar;
