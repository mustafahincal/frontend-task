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
function App() {
  return (
    <div className="font-poppins">
      <ProductHeader />
      <Product />
      <ProductFooter />
    </div>
  );
}

export default App;
