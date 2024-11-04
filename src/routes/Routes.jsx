import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../Components/Statistics/Statistics";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";

import GadgetsCards from "../CardCategory/GadgetsCards";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/category/All",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;
