import React, { use } from "react";
import TracLogo from "../../Shared/TracLogo/TracLogo";
import { Link, NavLink } from "react-router";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";

const Footer = () => {
  const { user } = use(AuthContext);
  return (
    <footer className="bg-teal-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & Brand */}
        <div>
          <Link to="/" className="flex items-center mb-4">
            <img
              className="h-14 w-14"
              src="https://i.ibb.co/FbfP4ZmB/logo-2-removebg-preview.png"
              alt="Logo"
            />
            <h1 className="text-2xl font-semibold ml-2">
              Local<span className="text-orange-600">Harvest</span>
            </h1>
          </Link>
          <p className="text-sm">
            Fresh and local produce, directly from farmers to your doorstep. Eat
            healthy, live better. 🌱
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-orange-500">
                Home
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/dashboard">DashBoard</NavLink>
              </li>
            )}

            <li>
              <NavLink to="/allProduct" className="hover:text-orange-500">
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-orange-500">
                Contact Us
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 text-3xl text-blue-500  "
            >
              {/* X (Twitter) */}
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-600 text-3xl text-sky-500 "
            >
              {/* linkedin */}
              <FaLinkedin />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500"
            ></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} LocalHarvest — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
