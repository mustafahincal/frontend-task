import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import CustomerComments from "../pages/customerComments/CustomerComments";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import MainLayout from "./MainLayout";

const MainContent = () => {
  return (
    <div className="font-source-sans-pro">
      <MainLayout>
        <Home />
        <AboutUs />
        <Products />
        <CustomerComments />
        <ContactUs />
      </MainLayout>
    </div>
  );
};

export default MainContent;
