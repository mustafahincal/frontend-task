import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Products from "./pages/products/Products";
import CustomerComments from "./pages/customerComments/CustomerComments";
import ContactUs from "./pages/contactUs/ContactUs";
import ProductHeader from "./components/ProductHeader";
import ProductFooter from "./components/ProductFooter";
import Product from "./pages/product/Product";
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
