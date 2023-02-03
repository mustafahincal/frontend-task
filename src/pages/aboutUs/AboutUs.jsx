import React from "react";

const AboutUs = () => {
  return (
    <div className="py-[130px] px-[150px] bg-content-bg">
      <div>
        <div className="text-[64px] font-bold">About us</div>
        <div className="text-[20px] text-content-small-text max-w-[470px]">
          Comfort is key and how you feel about your chair will affect how you
          feel and your mood.
        </div>
      </div>
      <div className="flex justify-between mt-[100px]">
        <div className="grid grid-cols-4 w-1/2 gap-y-10">
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
              Along with a healthy dose of negative space to give the eyes spots
              to rest.
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
        <div className="w-1/2 relative">
          <div className="grid grid-cols-4 w-full gap-y-10 gap-x-10 absolute -top-32">
            <div className="flex flex-col gap-10 col-span-2 mt-24">
              <img src="./assets/about-us-item1.svg" alt="" />
              <img src="./assets/about-us-item2.svg" alt="" />
            </div>
            <div className="flex flex-col gap-10 col-span-2 ">
              <img src="./assets/about-us-item3.svg" alt="" />
              <img src="./assets/about-us-item4.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
