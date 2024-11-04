import React from "react";
import { NavLink } from "react-router-dom";
// import "./Categories.css";
const Categories = ({ categories }) => {
  return (
    <div
      role="tablist"
      className="tabs tabs-boxed bg-white mb-5 flex flex-col items-start text-left gap-2"
    >
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab justify-start w-32 px-4 items-start bg-slate-200 ${
              isActive ? "tab-active" : ""
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
