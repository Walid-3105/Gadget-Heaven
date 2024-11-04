import React from "react";

const Card = ({ gadget }) => {
  const { product_image, product_title, price } = gadget || {};
  return (
    <div>
      <h3>{product_title}</h3>
      <p>{price} k</p>
    </div>
  );
};

export default Card;
