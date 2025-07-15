import React from "react";
import { Link, NavLink, Outlet } from "react-router";

import {
  FaHome,
  FaBoxOpen,
  FaMoneyCheckAlt,
  FaUserEdit,
  FaSearchLocation,
  FaUserClock,
  FaUsers,
  FaCreativeCommons,
  FaClipboardList,
} from "react-icons/fa";
import { RiEBike2Line, RiEBikeFill, RiLineChartLine } from "react-icons/ri";
import { MdAdminPanelSettings, MdManageHistory } from "react-icons/md";
import { FaPlusSquare, FaBullhorn, FaChartBar } from "react-icons/fa";
import TracLogo from "../Shared/TracLogo/TracLogo";
import Footer from "../component/Footer/Footer";

const DashboardLayout = () => {
  const role = true;

  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* navbar */}
          <div className="navbar bg-base-300 w-full lg:hidden">
            <div className="flex-none ">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side fixed">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <TracLogo></TracLogo>
            <li>
              <Link to="/dashboard">
                <FaHome className="inline-block mr-2" />
                Home
              </Link>
            </li>
            {/* users */}
            {role && (
              <>
                <li>
                  <NavLink to="/dashboard/viewPriceTrends">
                    <RiLineChartLine className="inline-block mr-2" />
                    ViewPriceTrends
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageWatchList">
                    <MdManageHistory className="inline-block mr-2" />
                    Manage WatchList
                  </NavLink>
                </li>
              </>
            )}
            {/* vendor deliveries */}
            {role && (
              <>
                <li>
                  <NavLink to="/dashboard/addProduct">
                    <FaPlusSquare className="inline-block mr-2" />
                    Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myProducts">
                    <FaBoxOpen className="inline-block mr-2" />
                    My Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addAdvertisement">
                    <FaBullhorn className="inline-block mr-2" />
                    Add Advertisement
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myAdvertisements">
                    <FaChartBar className="inline-block mr-2" />
                    My Advertisements
                  </NavLink>
                </li>
              </>
            )}
            {/* admin //{" "} */}
            {role && (
              <>
                <li>
                  <NavLink to="/dashboard/admin/allUsers">
                    <FaUsers className="inline-block mr-2" />
                    All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/allProducts">
                    <FaClipboardList className="mr-3 text-lg" />
                    Manage All Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/allAdvertisement">
                    <FaCreativeCommons className="inline-block mr-2" />
                    All Advertisement
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DashboardLayout;
