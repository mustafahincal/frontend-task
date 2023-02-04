import React from "react";
import { icons } from "../../assets";
import Search from "../../components/Search";

const Home = () => {
  return (
    <div className="bg-content-bg pt-[250px] " id="home">
      <div className="w-3/4 m-auto flex flex-col ">
        <div className="flex flex-col items-center pb-[150px] relative">
          <div className="font-bold text-[96px] w-[970px] text-center leading-[90px] text-nav-item relative">
            Amazing furniture for your home
            <img
              src={icons.homeArrow}
              className="absolute top-14 -right-20"
              alt=""
            />
          </div>
          <div className="text-[20px] mt-[30px] w-[776px] text-center text-content-small-text">
            We think the chair is the most important piece of furniture in your
            home. Because if you love the chair you are sitting in chances are
            you will love the rest of the room.
          </div>

          <Search />
        </div>
      </div>

      <div>
        <img
          src={icons.home}
          className="w-full h-[700px] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
