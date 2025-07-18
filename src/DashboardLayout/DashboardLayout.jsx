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
  FaChartLine,
  FaUser,
} from "react-icons/fa";
import { RiEBike2Line, RiEBikeFill, RiLineChartLine } from "react-icons/ri";
import {
  MdAddBusiness,
  MdAdminPanelSettings,
  MdManageHistory,
} from "react-icons/md";
import { FaPlusSquare, FaBullhorn, FaChartBar } from "react-icons/fa";
import TracLogo from "../Shared/TracLogo/TracLogo";
import Footer from "../component/Footer/Footer";
import { IoLogOutOutline } from "react-icons/io5";
import Navbar from "../component/Navbar/Navbar";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import { LuShoppingBag } from "react-icons/lu";

const DashboardLayout = () => {
  const { user } = useAuth();
  const { role, roleLoading } = useUserRole();
  console.log(role);

  return (
    <section>
      <div className="lg:block hidden">
        <Navbar />
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* navbar */}
          <div className="navbar bg-base-200 w-full lg:hidden">
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
            <div className=" flex justify-between items-center    ">
              <div>
                <TracLogo></TracLogo>
              </div>
              <div className="md:ml-[540px]">
                {user ? (
                  <img
                    className="rounded-full w-9 mr-4 border-3 border-primary"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <div className="mr-4 ring rounded-full p-2 text-green-700">
                    <FaUser className="text-sky-800" />
                  </div>
                )}
              </div>
            </div>
            <div className="hidden flex-none lg:block">
              {/* <ul className="menu menu-horizontal">
                
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul> */}
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
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 relative">
            <li className="mb-4">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                      : "hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
              >
                <FaHome className="mr-3" />
                <span>Home</span>
              </NavLink>
            </li>

            {/* users */}
            {!roleLoading && role === "user" && (
              <>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/viewPriceTrends"
                    end
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <FaChartLine className="mr-3" />
                    <span>ViewPriceTrends</span>
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/myOrderList"
                    end
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <LuShoppingBag className="inline-block mr-2" />
                    <span>My Order List</span>
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/manageWatchList"
                    end
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <MdManageHistory className="inline-block mr-2" />
                    <span>Manage WatchList</span>
                  </NavLink>
                </li>
              </>
            )}
            {/* vendor deliveries */}
            {!roleLoading && role === "Vendor" && (
              <>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/addProduct"
                    end
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <FaPlusSquare className="inline-block mr-2" />
                    <span>Add Product</span>
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/myProducts"
                    end
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <FaBoxOpen className="inline-block mr-2" />
                    <span>My Products</span>
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/addAdvertisement"
                    end
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <FaBullhorn className="inline-block mr-2" />

                    <span>Add Advertisement</span>
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/myAdvertisements"
                    end
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <FaChartBar className="inline-block mr-2" />
                    <span> My Advertisements</span>
                  </NavLink>
                </li>
              </>
            )}
            {/* admin //{" "} */}
            {!roleLoading && role === "Admin" && (
              <>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/admin/allUsers"
                    end
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <FaUsers className="inline-block mr-2" />
                    <span>All Users</span>
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/admin/allAdvertisement"
                    end
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <MdAddBusiness className="mr-3 text-lg" />
                    <span>Manage All Advertisement</span>
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/admin/allProducts"
                    end
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-600 border-l-4 border-blue-500 hover:bg-blue-200"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <FaClipboardList className="mr-3 text-lg" />
                    <span>Manage All Products</span>
                  </NavLink>
                </li>
              </>
            )}
            <li className="mb-4 absolute bottom-20">
              <Link to="/logout" className="text-red-400 gap-3 ">
                <IoLogOutOutline size={24} />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DashboardLayout;
