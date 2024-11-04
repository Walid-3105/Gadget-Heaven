import React from "react";
import Banner from "../Banner/Banner";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      {/* Category tab section */}
      <Categories categories={categories}></Categories>
      {/* Dynamic Nested components */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
