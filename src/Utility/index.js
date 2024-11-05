import toast from "react-hot-toast";

// get all gadgets data from local storage
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
    return toast.error("Data Already Added!");
  }
  cart.push(gadget);
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Successfully created!");
};

// remove a gadget from local storage

export { addToCart, getAllCart };
