import React from "react";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import CustomerComments from "../pages/customerComments/CustomerComments";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Footer from "./Footer";
import Header from "./Header";

const Content = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutUs />
      <Products />
      <CustomerComments />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Content;
