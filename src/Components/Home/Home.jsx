import React from "react";
import Banner from "../Banner/Banner";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div className="bg-[#F7F7F7]">
      <Banner></Banner>
      {/* Category tab section */}
      <div className="grid grid-cols-4 w-10/12 mx-auto">
        <div className="col-span-1">
          <Categories categories={categories}></Categories>
        </div>
        {/* Dynamic Nested components */}
        <div className="col-span-3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
