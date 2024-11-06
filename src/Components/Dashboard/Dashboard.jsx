import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import Cart from "../DashboardCarts/Cart";
import Wishlist from "../DashboardCarts/Wishlist";
const Dashboard = () => {
  const [activeCarts, setActiveCarts] = useState("cart");

  return (
    <div>
      <div className=" hero bg-[#9538E2] h-[286px] text-center">
        <div className="px-40 ">
          <h3 className="font-bold text-[32px] text-white mb-5">Dashboard</h3>
          <p className="font-normal text-white px-32 mb-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button
            onClick={() => setActiveCarts("cart")}
            className={`font-bold rounded-3xl border-gray-400 py-2 px-7 ${
              activeCarts === "cart"
                ? "bg-white text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActiveCarts("wishlist")}
            className={`font-bold rounded-3xl border-gray-400 py-2 px-7 ${
              activeCarts === "wishlist"
                ? "bg-white text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="p-5 bg-[#efefef]">
        {activeCarts === "cart" && (
          <div className="w-[1250px] mx-auto px-5 ">
            {/* <div className="flex justify-between">
              <h3 className="font-bold text-2xl">Cart</h3>
              <div className="flex gap-4">
                <h4 className="font-bold text-2xl">Total Coast:</h4>
                <button className="font-bold text-[#9538E2] bg-white rounded-3xl py-2 px-7">
                  Sort By Price
                </button>
                <button className="font-bold text-white bg-[#9538E2] rounded-3xl py-2 px-5">
                  Purchase
                </button>
              </div>
            </div> */}
            <Cart></Cart>
          </div>
        )}
        {activeCarts === "wishlist" && (
          <div className="w-[1250px] mx-auto px-5">
            <h3 className="font-bold text-xl ">Wishlist Items</h3>
            <Wishlist></Wishlist>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
