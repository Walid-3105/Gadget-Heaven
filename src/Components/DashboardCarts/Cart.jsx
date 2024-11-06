import React, { useEffect, useState } from "react";
import { getAllCart, removeFormCart } from "../../Utility";
import CartCard from "./CartCard";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [sorts, setSorts] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  useEffect(() => {
    const cart = getAllCart();
    setCarts(cart);
    setSorts(cart);
    handleTotalMoney(cart);
  }, []);

  const handleRemoveCart = (product_id) => {
    removeFormCart(product_id);
    const cart = getAllCart();
    setCarts(cart);
    setSorts(cart);
    handleTotalMoney(cart);
  };

  const handleSortByPrice = (sort) => {
    if (sort == "price") {
      const sorted = [...carts].sort((a, b) => b.price - a.price);
      setSorts(sorted);
    } else {
      setSortedCarts(carts);
    }
  };

  const handleTotalMoney = (items) => {
    let total = 0;
    for (const item of items) {
      total += item.price;
    }
    setTotalMoney(total);
  };
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl">Cart</h3>
        <div className="flex gap-4">
          <h4 className="font-bold text-2xl">Total Coast: {totalMoney}</h4>
          <button
            onClick={() => handleSortByPrice("price")}
            className="font-bold text-[#9538E2] bg-white rounded-3xl py-2 px-7"
          >
            Sort By Price
          </button>
          <button className="font-bold text-white bg-[#9538E2] rounded-3xl py-2 px-5">
            Purchase
          </button>
        </div>
      </div>
      {sorts &&
        sorts.map((data) => (
          <CartCard
            handleRemoveCart={handleRemoveCart}
            key={data.product_id}
            data={data}
          ></CartCard>
        ))}
    </div>
  );
};

export default Cart;
