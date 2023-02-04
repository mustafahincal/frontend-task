import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

const defaultProducts = JSON.parse(localStorage.getItem("products")) || [];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultProducts);
  const [selectedProduct, setSelectedProduct] = useState({});

  const values = {
    products,
    setProducts,
    selectedProduct,
    setSelectedProduct,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
