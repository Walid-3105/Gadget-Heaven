import React from "react";
import { MdDeleteForever } from "react-icons/md";

const CartCard = ({ data, handleRemoveCart }) => {
  const { product_id, product_image, product_title, description, price } = data;
  return (
    <>
      <div className="bg-white p-8 rounded-2xl mt-5 mx-auto flex gap-8">
        <img
          className="w-[200px] h-[124px] rounded-xl"
          src={product_image}
          alt=""
        />
        <div className="flex flex-1 justify-between items-center">
          <div>
            <h3 className="text-2xl pb-[18px] font-semibold">
              {product_title}
            </h3>
            <p className="text-lg opacity-80 pb-4">{description}</p>
            <h2 className="text-xl opacity-60 font-semibold">
              Price: $ {price}
            </h2>
          </div>
          <div
            onClick={() => handleRemoveCart(product_id)}
            className="justify-end"
          >
            <MdDeleteForever size={32}></MdDeleteForever>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
