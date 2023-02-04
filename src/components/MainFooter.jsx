import React from "react";

const Footer = () => {
  return (
    <div className="w-full  bg-footer-bg flex flex-col items-center justify-between pt-24 pb-4 gap-36">
      <div className="w-3/4 h-[161px] flex justify-between size-[20px] ">
        <ul className="bg-white flex flex-col gap-[12px] w-[200px]">
          <li>
            <img src="./assets/Logo.svg" alt="" />
          </li>
          <li>
            <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
          </li>
        </ul>
        <ul className="bg-white flex flex-col gap-[12px]">
          <li className="font-bold ">Quick links</li>
          <li>Gallery</li>
          <li>About Us</li>
          <li>Buy Online</li>
        </ul>
        <ul className="bg-white flex flex-col gap-[12px]">
          <li className="font-bold ">Policy</li>
          <li>Term & conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="bg-white flex flex-col gap-[12px]">
          <li className="font-bold ">Social</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div className="text-[14px]">
        Copyright ©2022 Zing Inc. All right reserved.
      </div>
    </div>
  );
};

export default Footer;
