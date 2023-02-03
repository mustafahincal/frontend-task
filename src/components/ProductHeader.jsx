import React from "react";

const ProductHeader = () => {
  return (
    <div className="rounded-b-product-header shadow-product-header ">
      <div className="bg-white w-4/5 h-[90px] text-nav-item  m-auto flex justify-between  items-center">
        <img src="./assets/ebay.svg" alt="" />
        <div className="rounded-lg bg-product-page-header-search flex ml-10 w-2/5">
          <div className="p-[12px] flex justify-between">
            <div className="flex justify-between gap-2 flex-shrink-0">
              <div className="flex-shrink-0">All Categories</div>
              <img src="./assets/profile-down.svg" alt="" />
            </div>
            <img
              src="./assets/product-page-search-divider.svg"
              className="mx-3"
              alt=""
            />
            <input
              type="text"
              placeholder="Search for items..."
              className="outline-none border-none bg-product-page-header-search w-full"
            />
          </div>
          <button className="bg-product-search-button py-[12px] px-[16px] rounded-r-lg ml-auto">
            <img src="./assets/product-page-search.svg" alt="" />
          </button>
        </div>
        <div className="flex items-center gap-2 ml-10">
          <img src="./assets/wishlist.svg" alt="" />
          <span className="font-medium text-[14px]">Wishlist</span>
        </div>
        <div className="flex items-center gap-2 ml-10">
          <img src="./assets/cart.svg" alt="" />
          <div className="flex flex-col">
            <span className="font-medium text-[14px]">My cart</span>
            <span className="text-blue-500">$21</span>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-10">
          <img src="./assets/profile.svg" alt="" />
          <img src="./assets/profile-down.svg" alt="" />
        </div>
        <div className="flex items-center gap-2 ml-6 bg-product-search-button p-[14px] rounded-lg">
          <img src="./assets/brows-categories.svg" alt="" />
          <span className="font-medium text-[14px] text-white">
            Brows All Categories
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
