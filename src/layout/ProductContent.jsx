import React from "react";
import Product from "../pages/product/Product";
import ProductLayout from "./ProductLayout";

const ProductContent = () => {
  return (
    <div className="font-poppins">
      <ProductLayout>
        <Product />
      </ProductLayout>
    </div>
  );
};

export default ProductContent;
