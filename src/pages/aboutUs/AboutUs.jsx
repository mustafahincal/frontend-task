import React from "react";
import { icons } from "../../assets";

const AboutUs = () => {
  return (
    <div className="pt-[130px] bg-content-bg scroll-m-[20px]" id="about">
      <div className="w-3/4 m-auto">
        <div>
          <div className="text-[64px] font-bold">About us</div>
          <div className="text-[20px] mt-4 text-gray-400 max-w-[470px]">
            Comfort is key and how you feel about your chair will affect how you
            feel and your mood.
          </div>
        </div>
        <div className="flex justify-between mt-[100px] gap-10">
          <div className="grid grid-cols-4 grid-rows-3 w-1/2 gap-y-10 ">
            <div className="col-span-2 flex flex-col gap-[14px] w-[270px]">
              <div className="text-[64px] font-bold text-nav-button">1</div>
              <div className="text-[24px] font-bold">Mission</div>
              <div className="text-[20px] text-search">
                It makes people at ease and feel like they want to open up.
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-[14px] w-[270px]">
              <div className="text-[64px] font-bold text-nav-button">2</div>
              <div className="text-[24px] font-bold">Motivation</div>
              <div className="text-[20px] text-search">
                The perfect mix of art that complements the room's style.
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-[14px] w-[270px]">
              <div className="text-[64px] font-bold text-nav-button">3</div>
              <div className="text-[24px] font-bold">Vision</div>
              <div className="text-[20px] text-search">
                Along with a healthy dose of negative space to give the eyes
                spots to rest.
              </div>
            </div>
            <div className=" col-span-2 flex flex-col gap-[14px] w-[270px]">
              <div className="text-[64px] font-bold text-nav-button">4</div>
              <div className="text-[24px] font-bold">Goal</div>
              <div className="text-[20px] text-search">
                Art that has meaning to the people who live in the space,
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="grid grid-cols-4 gap-y-10 gap-x-10 relative -top-40">
              <div className="flex flex-col gap-10 col-span-2 mt-24">
                <img src={icons.aboutUsItem1} alt="" />
                <img src={icons.aboutUsItem2} alt="" />
              </div>
              <div className="flex flex-col gap-10 col-span-2 ">
                <img src={icons.aboutUsItem3} alt="" />
                <img src={icons.aboutUsItem4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
