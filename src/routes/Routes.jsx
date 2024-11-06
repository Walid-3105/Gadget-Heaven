import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../Components/Statistics/Statistics";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import SmartWatches from "../Components/SmartWatches/SmartWatches";
import GadgetsCards from "../CardCategory/GadgetsCards";
import GadgetDetails from "../CardCategory/GadgetDetails";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Contact from "../Components/Contact/Contact";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("/gadgets.json"),
          },
          {
            path: "/category/All",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("/gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetsCards></GadgetsCards>,
            loader: () => fetch("/gadgets.json"),
          },
          {
            path: "/category/Smart Watches",
            element: <SmartWatches></SmartWatches>,
          },
        ],
      },
      {
        path: "/gadget/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/gadgets.json"),
      },

      {
        path: "/category/:category/gadget/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/statistics",
        loader: () => fetch("/gadgets.json"),
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default routes;
