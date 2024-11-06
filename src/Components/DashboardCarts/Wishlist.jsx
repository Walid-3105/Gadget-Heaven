import React, { useEffect, useState } from "react";
import { getAllWishList, removeFormWishList } from "../../Utility";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const [wishlists, setWishLists] = useState([]);
  useEffect(() => {
    const wishlist = getAllWishList();
    setWishLists(wishlist);
  }, []);
  const handleRemoveWishList = (product_id) => {
    removeFormWishList(product_id);
    const wishlist = getAllWishList();
    setWishLists(wishlist);
  };
  return (
    <div>
      <h3 className="w-[1250px] mx-auto font-bold text-2xl">Wishlist</h3>
      {wishlists &&
        wishlists.map((data) => (
          <WishlistCard
            handleRemoveWishList={handleRemoveWishList}
            key={data.product_id}
            data={data}
          ></WishlistCard>
        ))}
    </div>
  );
};

export default Wishlist;
