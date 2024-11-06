import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { addToCart, addToWishList } from "../Utility";
const GadgetDetails = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const [gadget, setGadget] = useState({});

  if (data) {
    useEffect(() => {
      const singleData = data.find((gadget) => gadget.product_id == product_id);
      setGadget(singleData || {});
    }, [data, product_id]);
  } else {
    ("");
  }

  const {
    product_image,
    product_title,
    price,
    description,
    Specification,
    rating,
  } = gadget;

  const handleAddToCart = (gadget) => {
    addToCart(gadget);
  };
  const handleAddWishList = (gadget) => {
    addToWishList(gadget);
  };
  const ratingConfig = {
    size: 40,
    value: 4,
    edit: false,
    isHalf: true,
  };
  return (
    <div className="relative">
      <div className=" hero bg-[#9538E2] h-[463px] text-center mb-[420px]">
        <div className="px-40 pb-60">
          <h3 className="font-bold text-[56px] text-white ">Product Details</h3>
          <p className="font-normal text-white px-32 mb-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="border border-2px p-4 rounded-2xl w-fit mx-auto absolute top-64 left-36">
        <div className=" bg-base-200 w-[1000px] h-[567px] rounded-2xl grid grid-cols-2">
          <div className="items-center py-8 pl-8">
            <img
              className="w-[424px] h-[503px] rounded-2xl"
              src={product_image}
              alt=""
            />
          </div>
          <div className="text-black col-span-1 py-8 space-y-4">
            <h3 className="font-semibold text-2xl">{product_title}</h3>
            <p className="text-xl font-semibold opacity-80">Price: $ {price}</p>
            <button class="px-4 py-1 border border-green-500 text-green-500 rounded-2xl">
              In Stock
            </button>
            <h2 className="font-normal text-lg opacity-60">{description}</h2>
            <div className="pb-3">
              <span className="text-lg font-bold pb-3">Specification:</span>
              {Specification &&
                Specification.map((cat, idx) => (
                  <li
                    className="list-decimal opacity-60 font-normal text-lg"
                    key={idx}
                  >
                    {cat}
                  </li>
                ))}
            </div>
            <h4>
              <span className="font-bold text-lg">Rating:</span>
              <div className="flex items-center gap-2">
                <ReactStars {...ratingConfig}></ReactStars>
                <span className="bg-slate-200 px-3 py-1 rounded-2xl">
                  {rating}
                </span>
              </div>
            </h4>
            <div className="flex gap-2 pt-6">
              <button
                onClick={() => handleAddToCart(gadget)}
                className="text-white hover:text-[#9538E2] btn rounded-3xl text-lg font-bold bg-[#9538E2] "
              >
                Add to Cart
                <MdOutlineShoppingCart size={25}></MdOutlineShoppingCart>
              </button>
              <button
                onClick={() => handleAddWishList(gadget)}
                className="btn border border-gray-400 rounded-full items-center "
              >
                <FaRegHeart size={16}></FaRegHeart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
