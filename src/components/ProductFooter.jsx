import React from "react";

const ProductFooter = () => {
  return (
    <div className="bg-white w-4/5  m-auto mt-20">
      <img src="./assets/footer-divider.svg" alt="" />
      <div className="flex justify-between py-20">
        <img src="./assets/ebay.svg" className="self-start" alt="" />
        <ul className="flex flex-col gap-y-5">
          <li className="font-medium text-[24px] mb-4">Account</li>
          <li>Wishlist</li>
          <li>Cart</li>
          <li>Track Order</li>
          <li>Shipping Details</li>
        </ul>
        <ul className="flex flex-col gap-y-5">
          <li className="font-medium text-[24px] mb-4">Useful links</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Hot deals</li>
          <li>Promotions</li>
          <li>New products</li>
        </ul>
        <ul className="flex flex-col gap-y-5">
          <li className="font-medium text-[24px] mb-4">Help Center</li>
          <li>Payments</li>
          <li>Refund</li>
          <li>Checkout</li>
          <li>Shipping</li>
          <li>Q&A</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <img src="./assets/footer-divider.svg" alt="" />
      <div className="flex justify-between mt-14 items-center">
        <div className="text-[16px]">© 2022, All rights reserved</div>
        <img src="./assets/footer-creditcards.svg" alt="" />
      </div>
    </div>
  );
};

export default ProductFooter;
