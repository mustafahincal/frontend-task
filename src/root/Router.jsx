import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContent from "../layout/MainContent";
import ProductContent from "../layout/ProductContent";

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
