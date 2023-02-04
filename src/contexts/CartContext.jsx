import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoadingContext } from "./LoadingContext";

const CartContext = createContext();

const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
  ]);
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
