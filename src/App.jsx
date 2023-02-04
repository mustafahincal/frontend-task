import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContent from "./layout/MainContent";
import ProductContent from "./layout/ProductContent";
function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/product" element={<ProductContent />} />
      </Routes>
    </div>
  );
}

export default App;
