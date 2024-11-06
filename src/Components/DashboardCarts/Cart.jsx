import React, { useEffect, useState } from "react";
import { getAllCart, removeFormCart } from "../../Utility";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [sorts, setSorts] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

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

  const handlePurchase = () => {
    if (carts.length === 0) {
      toast.error("No Data");
      return;
    }
    setPurchaseAmount(totalMoney);
    carts.forEach((item) => removeFormCart(item.product_id, false));
    setCarts([]);
    setSorts([]);
    setTotalMoney(0);
    setModal(true);
    toast.success("Purchase done!");
  };

  const closeModal = () => {
    setModal(false);
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl">Cart</h3>
        <div className="flex gap-4">
          <h4 className="font-bold text-2xl">Total Coast: {totalMoney}</h4>
          <button
            onClick={() => handleSortByPrice("price")}
            className="hover:bg-[#9538E2] hover:text-white font-bold text-[#9538E2] bg-white rounded-3xl py-2 px-7"
          >
            Sort By Price
          </button>
          <button
            onClick={handlePurchase}
            className="hover:bg-gray-400 font-bold text-white bg-[#9538E2] rounded-3xl py-2 px-5"
          >
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

      {/* Purchase Modal */}
      <dialog id="my_modal_1" className="modal" open={modal}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Thank you for your purchase!</h3>
          <p className="py-4">Total Paid: ${purchaseAmount}</p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
