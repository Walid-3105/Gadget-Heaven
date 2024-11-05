import React from "react";

const CartCard = ({ data }) => {
  const { product_title } = data;
  return (
    <div>
      <h3>{product_title}</h3>
    </div>
  );
};

export default CartCard;
