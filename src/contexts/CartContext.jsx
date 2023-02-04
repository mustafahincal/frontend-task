import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoadingContext } from "./LoadingContext";

const CartContext = createContext();

const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(defaultCart);
  const [cartModal, setCartModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  const removeFromCart = (id) => {
    const filteredProducts = cart.filter((cartItem) => cartItem.id != id);
    setCart(filteredProducts);
  };
  const cartTotal = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.price, 0);
  };

  const buyProducts = () => {
    toast.success("Products purchased successfully");
    setCart([]);
    setCartModal(false);
    navigate("/");
  };

  const productControl = (id) => {
    const control = cart.filter((cartItem) => cartItem.id == id);
    return control.length > 0;
  };

  const values = {
    cart,
    setCart,
    cartModal,
    setCartModal,
    cartTotal,
    removeFromCart,
    addToCart,
    buyProducts,
    productControl,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
