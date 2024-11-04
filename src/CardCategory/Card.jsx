import React from "react";
import { Link } from "react-router-dom";

const Card = ({ gadget }) => {
  const { product_id, product_image, product_title, price } = gadget || {};
  return (
    <div className="border rounded-xl p-5 h-full flex flex-col bg-white">
      <div className="flex-grow">
        <figure>
          <img
            className="h-[181px] w-full rounded-xl"
            src={product_image}
            alt=""
          />
        </figure>
        <div>
          <h3 className="text-2xl font-semibold mt-6 mb-3">{product_title}</h3>
          <p className="text-xl font-medium opacity-60 mb-3">{price} k</p>
        </div>
        <div className="mt-auto bottom-0">
          <Link to={`./gadget/${product_id}`}>
            <button className="btn btn-outline btn-secondary rounded-s-2xl rounded-e-2xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
