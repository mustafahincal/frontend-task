import React from "react";
import Product from "../pages/product/Product";
import ProductLayout from "./ProductLayout";

const ProductContent = () => {
  return (
    <>
      <ProductLayout>
        <Product />
      </ProductLayout>
    </>
  );
};

export default ProductContent;
