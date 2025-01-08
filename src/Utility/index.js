import toast from "react-hot-toast";

// get all gadgets data from local storage -1
const getAllCart = () => {
  const all = localStorage.getItem("cart");
  if (all) {
    const cart = JSON.parse(all);
    return cart;
  } else {
    return [];
  }
};

// add a gadget in local storage
const addToCart = (gadget) => {
  const cart = getAllCart();
  const isExist = cart.find((item) => item.product_id == gadget.product_id);
  if (isExist) {
    return toast.error("Cart Already Added!");
  }
  cart.push(gadget);
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Successfully Cart Data Added!");
};

// remove a gadget from local storage
const removeFormCart = (product_id, showToast = true) => {
  const cart = getAllCart();
  const remaining = cart.filter((cart) => cart.product_id != product_id);
  localStorage.setItem("cart", JSON.stringify(remaining));
  if (showToast) {
    toast.success("Successfully Removed!");
  }
};

// get all gadgets data from local storage -2
const getAllWishList = () => {
  const all = localStorage.getItem("wishList");
  if (all) {
    const wishList = JSON.parse(all);
    return wishList;
  } else {
    return [];
  }
};

// add a gadget in local storage
const addToWishList = (gadget) => {
  const wishList = getAllWishList();
  const isExist = wishList.find((item) => item.product_id == gadget.product_id);
  if (isExist) {
    return toast.error("wishList Already Added!");
  }

  wishList.push(gadget);
  localStorage.setItem("wishList", JSON.stringify(wishList));
  toast.success("Successfully WishList Added!");
};
// remove a wishList from local storage
const removeFormWishList = (product_id) => {
  const wishList = getAllWishList();
  const remaining = wishList.filter(
    (wishList) => wishList.product_id != product_id
  );
  localStorage.setItem("wishList", JSON.stringify(remaining));
  toast.success("Successfully WishList Removed!");
};

export {
  addToCart,
  getAllCart,
  removeFormCart,
  getAllWishList,
  addToWishList,
  removeFormWishList,
};
