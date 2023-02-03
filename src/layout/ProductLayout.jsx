import React, { Children } from "react";
import ProductFooter from "../components/ProductFooter";
import ProductHeader from "../components/ProductHeader";

const ProductLayout = ({ children }) => {
  return (
    <>
      <ProductHeader />
      {children}
      <ProductFooter />
    </>
  );
};

export default ProductLayout;
