import React from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../assets";

const Header = () => {
  const navigate = useNavigate();

  const handleBuyButton = () => {
    navigate("/product/3");
  };
  return (
    <div className="shadow-product-header">
      <div className="  w-3/4 h-[80px] text-nav-item   m-auto flex justify-between items-center">
        <a href="#home">
          <img src={icons.Logo} className="w-[54px] h-[30px]" alt="" />
        </a>
        <div>
          <ul className="flex gap-[40px] ">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li className="flex gap-[12px]">
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#comment">Testimonial</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="mr-[30px]">
            <a href="#contact">Contact</a>
          </span>
          <button
            onClick={() => handleBuyButton()}
            className="px-[20px] py-[10px] bg-nav-button text-white"
          >
            Buy online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
