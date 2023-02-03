import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col bg-content-bg pt-[150px]">
      <div className="flex flex-col items-center pb-[150px] relative">
        <div className="font-bold text-[96px] w-[970px] text-center leading-[90px] text-nav-item">
          Amazing furniture for your home
        </div>
        <div className="text-[20px] mt-[30px] w-[776px] text-center text-content-small-text">
          We think the chair is the most important piece of furniture in your
          home. Because if you love the chair you are sitting in chances are you
          will love the rest of the room.
        </div>

        <div className="flex justify-between bg-white items-center w-[770px] h-[100px] text-search shadow-md px-[83px] absolute top-full -translate-y-1/2">
          <input
            type="text"
            placeholder="Search your product"
            className="text-[20px] w-full outline-none
            "
          />
          <span>
            <img src="./assets/search-normal.svg" alt="" />
          </span>
        </div>
      </div>
      <div>
        <img
          src="./assets/home.svg"
          className="w-full h-[700px] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
