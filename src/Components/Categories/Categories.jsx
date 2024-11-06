import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div
      role="tablist"
      className="tabs tabs-boxed rounded-2xl bg-white w-fit p-6 mb-5 flex flex-col items-start text-left gap-2"
    >
      {categories &&
        categories.map((category) => (
          <NavLink
            key={category.category}
            to={`/category/${category.category}`}
            role="tab"
            className={({ isActive }) =>
              `tab justify-start w-32 px-4 items-start hover:bg-[#1a34f4dc] hover:text-white bg-slate-200 ${
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
