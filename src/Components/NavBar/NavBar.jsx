import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getAllCart } from "../../Utility";
import { Helmet } from "react-helmet";

const NavBar = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const cart = getAllCart();
    setCarts(cart);
  }, []);

  const location = useLocation();
  const isHomeActive = location.pathname === "/";
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/") return "Home | Gadget Heaven";
    if (path === "/dashboard") return "Dashboard | Gadget Heaven";
    if (path === "/statistics") return "Statistics | Gadget Heaven";
    if (path === "/contact") return "Contact | Gadget Heaven";
    return "Gadget Heaven";
  };
  return (
    <div className="px-5 w-full z-50">
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
      <div
        className={`navbar backdrop-blur-xl ${
          isHomeActive ? "bg-[#9538E2] text-white" : "bg-white text-black"
        } bg-[#9538E2] rounded-t-xl w-full`}
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="./"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold  ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="./statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold  ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="./dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold  ${
                    isActive ? "text-warning" : "hover:text-warning"
                  }`
                }
                to="./contact"
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <Link to="./" className="btn px-0 btn-ghost text-2xl">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <NavLink
              className={({ isActive }) =>
                `font-bold text-base ${
                  isActive ? "text-warning" : "hover:text-warning"
                }`
              }
              to="./"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold text-base ${
                  isActive ? "text-warning" : "hover:text-warning"
                }`
              }
              to="./statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold text-base ${
                  isActive ? "text-warning" : "hover:text-warning"
                }`
              }
              to="./dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold text-base ${
                  isActive ? "text-warning" : "hover:text-warning"
                }`
              }
              to="./contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {carts.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">{carts.length}</span>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div>
                <div>
                  <FaRegHeart size={25}></FaRegHeart>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              ></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
// className={({ isActive }) =>
//   `font-bold  ${
//     isActive ? "text-warning" : "hover:text-warning"
//   }`
// }
