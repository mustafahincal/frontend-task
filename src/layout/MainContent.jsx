import React from "react";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import CustomerComments from "../pages/customerComments/CustomerComments";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "./MainLayout";
import MainLayout from "./MainLayout";

const MainContent = () => {
  return (
    <>
      <MainLayout>
        <Home />
        <AboutUs />
        <Products />
        <CustomerComments />
        <ContactUs />
      </MainLayout>
    </>
  );
};

export default MainContent;
