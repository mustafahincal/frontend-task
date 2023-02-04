import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { icons } from "../assets";
import { useCartContext } from "../contexts/CartContext";
import DownloadJSON from "./DownloadJson";

const ProductHeader = () => {
  const { cart, setCartModal, cartTotal } = useCartContext();

  const handleCartModal = () => {
    window.scrollTo(0, 0);
    setCartModal(true);
    document.querySelector("body").style.overflow = "hidden";
  };
  return (
    <div className="rounded-b-product-header shadow-product-header fixed w-full top-0">
      <div className="bg-white w-4/5 h-[90px] text-nav-item  m-auto flex justify-between  items-center">
        <div className="cursor-pointer">
          <div onClick={() => window.scrollTo(0, 0)}>
            <img src={icons.ebay} alt="" />
          </div>
        </div>
        <div className="rounded-lg bg-product-page-header-search flex ml-10 w-2/5">
          <div className="p-[12px] flex justify-between">
            <div className="flex justify-between gap-2 flex-shrink-0">
              <div className="flex-shrink-0">All Categories</div>
              <img src="./assets/profile-down.svg" alt="" />
            </div>
            <img src={icons.productPageSearchDivider} className="mx-3" alt="" />
            <input
              type="text"
              placeholder="Search for items..."
              className="outline-none border-none bg-product-page-header-search w-full"
            />
          </div>
          <button className="bg-product-search-button py-[12px] px-[16px] rounded-r-lg ml-auto">
            <img src={icons.productPageSearch} alt="" />
          </button>
        </div>
        <div className="flex items-center gap-2 ml-10">
          <img src={icons.wishlist} alt="" />
          <span className="font-medium text-[14px]">Wishlist</span>
        </div>
        <button
          onClick={() => handleCartModal()}
          className="flex items-center gap-2 ml-10 relative"
        >
          <img src={icons.cart} alt="" />
          <div className="flex flex-col items-start">
            <span className="font-medium text-[14px]">My cart</span>
            <span className="text-blue-500">${cartTotal()}</span>
          </div>
          <div className="absolute -top-1 left-4 bg-blue-600 text-white w-[20px] h-[20px] rounded-full text-[12px] flex items-center justify-center">
            {cart.length}
          </div>
        </button>
        <div className="flex items-center gap-2 ml-10">
          <img src={icons.profile} alt="" />
          <img src={icons.profileDown} alt="" />
        </div>
        <div className="flex items-center gap-2 ml-6 bg-product-search-button p-[14px] rounded-lg">
          <img src={icons.browsCategories} alt="" />
          <span className="font-medium text-[14px] text-white">
            <DownloadJSON />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
