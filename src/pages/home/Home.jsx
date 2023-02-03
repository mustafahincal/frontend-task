import React from "react";
import Search from "../../components/Search";

const Home = () => {
  return (
    <div className="flex flex-col bg-content-bg pt-[150px]">
      <div className="flex flex-col items-center pb-[150px] relative">
        <div className="font-bold text-[96px] w-[970px] text-center leading-[90px] text-nav-item relative">
          Amazing furniture for your home
          <img
            src="./assets/home-arrow.svg"
            className="absolute top-9 -right-20"
            alt=""
          />
        </div>
        <div className="text-[20px] mt-[30px] w-[776px] text-center text-content-small-text">
          We think the chair is the most important piece of furniture in your
          home. Because if you love the chair you are sitting in chances are you
          will love the rest of the room.
        </div>

        <Search />
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
