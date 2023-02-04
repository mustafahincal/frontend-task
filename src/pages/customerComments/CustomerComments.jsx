import React from "react";
import { icons } from "../../assets";

const CustomerComments = () => {
  return (
    <div className="py-[130px] bg-customer-comments-bg text-white" id="comment">
      <div className="w-3/4 m-auto">
        <div className="text-[64px] font-bold">What do customers say...</div>
        <div className="flex justify-center mt-20 px-40">
          <div className="w-1/2 relative">
            <img src={icons.customer} alt="" />
            <img
              src={icons.customerStar}
              className="absolute -left-10 top-3/4"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <img src={icons.quoteUp} alt="" />
            <div className="flex flex-col gap-[25px]">
              <span className="font-bold text-[36px]">Amazing service</span>
              <span className="text-[20px] text-gray-400">
                Since the online marketplace can be a scary place, the presence
                of customer reviews on an online store helps establish
                authenticity, confidence, and trust among shoppers.
              </span>
              <div>
                <div className="text-[20px] text-nav-button">Wade Warren</div>
                <div className="text-[16px] text-gray-400">Doctor</div>
              </div>
              <div className="flex justify-end gap-3 mt-16">
                <img src={icons.arrowCircleLeft} alt="" />
                <img src={icons.arrowCircleRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerComments;
