import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";
import "./nav.css";

// TODO : ========================================= NAVBAR =========================================>
const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const [isDark, setIsDark] = useState(false);

  // !Load theme from localStorage on first render ===========>
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setIsDark(savedTheme === "dark");
  }, []);

  //! Handle switch toggle  ===================================>
  const switchTheme = (e) => {
    const darkMode = e.target.checked;
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setIsDark(darkMode);
  };
  //! HANDLE LOGOUT   =========================================>
  const handleLogOut = () => {
    logOutUser();
  };
  // ! links of route ============================================>
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">DashBoard</NavLink>
      </li>
      <li>
        <NavLink to="/allProduct"> All Products</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200 shadow-sm sticky z-10 top-0">
      <div className="navbar-start">
        {/* <div className="dropdown bg-red-800">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
        {/* drawer ================= */}
        <div className="relative">
          {/* Toggle Button */}
          <button
            className="p-2  text-white bg-base-200 rounded lg:hidden"
            onClick={toggleDrawer}
          >
            <FiMenu className="text-green-700 text-4xl" />
          </button>

          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0  bg-opacity-80 z-40 lg:hidden  "
              onClick={toggleDrawer}
            ></div>
          )}

          {/* Drawer */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-4 border-b bg-yellow-400">
              <img
                className="rounded-full w-24"
                src="https://i.ibb.co/FbfP4ZmB/logo-2-removebg-preview.png"
                alt=""
              />
              <h1 className="text-2xl font-semibold">
                Track<span className="text-green-700">Kacha</span>
              </h1>
              <button
                className="absolute top-4 right-4 text-xl"
                onClick={toggleDrawer}
              >
                ✕
              </button>
            </div>

            <ul className="p-4 space-y-2">{links}</ul>
          </div>
        </div>
        {/* logo================== */}
        <div className="flex items-center">
          <Link>
            <img
              className="h-15 w-16 md:block hidden"
              src="https://i.ibb.co/FbfP4ZmB/logo-2-removebg-preview.png"
              alt=""
            />
          </Link>
          <h1 className="text-2xl font-semibold">
            Track<span className="text-orange-600">Kacha</span>
          </h1>
        </div>
      </div>
      {/* routes links ============ */}
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-10 menu-horizontal px-1">
          {links}
          <li>
            {/* toggle =================*/}
            <div className="mr-8">
              <label
                htmlFor="Toggle1"
                className="inline-flex items-center space-x-4 cursor-pointer"
              >
                <span className="relative">
                  <input
                    id="Toggle1"
                    type="checkbox"
                    onChange={switchTheme}
                    checked={isDark}
                    className="hidden peer"
                  />
                  <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner peer-checked:bg-violet-600 transition-all duration-300"></div>
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 bg-white rounded-full shadow peer-checked:translate-x-4 transition-all duration-300"></div>
                </span>
              </label>
            </div>
          </li>
        </ul>
      </div>
      {/* user and logout buttons  */}
      <div className="navbar-end flex items-center ">
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
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-sm bg-teal-600 font-bold lg:block hidden"
          >
            logOut
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm bg-primary font-bold">signIn</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
