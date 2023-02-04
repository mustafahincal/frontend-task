import React from "react";

const Search = () => {
  return (
    <div className="flex justify-between bg-white items-center w-[850px] h-[100px] text-search shadow-md px-[50px] absolute top-full -translate-y-1/2">
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
  );
};

export default Search;
