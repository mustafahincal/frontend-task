import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(defaultCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  const removeFromCart = (product) => {
    const filteredProducts = cart.filter(
      (item) => item.productId !== product.productId
    );
    setCart(filteredProducts);
  };

  const buyProducts = () => {
    setCart([]);
  };

  const values = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
