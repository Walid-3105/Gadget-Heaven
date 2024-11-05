import React, { useEffect, useState } from "react";
import { getAllCart } from "../../Utility";
import CartCard from "./CartCard";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const cart = getAllCart();
    setCarts(cart);
  }, []);

  return (
    <div>
      <h3>This is a cart:{carts.length}</h3>

      {carts &&
        carts.map((data) => (
          <CartCard key={data.product_id} data={data}></CartCard>
        ))}
    </div>
  );
};

export default Cart;
