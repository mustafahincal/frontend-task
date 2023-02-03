import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleBuyButton = () => {
    navigate("/product");
  };
  return (
    <div className="shadow-md">
      <div className="bg-white w-3/4 h-[80px] text-nav-item  m-auto flex justify-between items-center">
        <img src="./assets/Logo.svg" className="w-[54px] h-[30px]" alt="" />
        <div>
          <ul className="flex gap-[40px] ">
            <li>Home</li>
            <li>About Us</li>
            <li className="flex gap-[12px]">
              Products <img src="./assets/arrow-down.svg" alt="" />{" "}
            </li>
            <li>Testimonial</li>
          </ul>
        </div>
        <div>
          <span className="mr-[30px]">Contact</span>
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
