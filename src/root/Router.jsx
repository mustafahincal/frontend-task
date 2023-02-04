import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContent from "../layouts/MainContent";
import ProductContent from "../layouts/ProductContent";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/product/:id" element={<ProductContent />} />
      </Routes>
    </>
  );
};

export default Router;
