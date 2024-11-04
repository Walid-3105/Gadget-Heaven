import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === "/";
  return (
    <div className="px-5 w-full z-50">
      <div
        className={`navbar backdrop-blur-xl ${
          isHomeActive ? "bg-[#9538E2]" : "bg-white"
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
                  `font-bold  ${
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
            </ul>
          </div>
          <Link to="./" className="btn px-0 btn-ghost text-xl">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <NavLink
              className={({ isActive }) =>
                `font-bold  ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="./"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold  ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="./statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold  ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="./dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
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
