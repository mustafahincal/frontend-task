import React from "react";

const Header = () => {
  return (
    <div className="shadow-md">
      <div className="bg-white w-[1440px] h-[80px] text-nav-item  m-auto flex justify-between items-center">
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
          <button className="px-[20px] py-[10px] bg-nav-button text-white">
            Buy online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
