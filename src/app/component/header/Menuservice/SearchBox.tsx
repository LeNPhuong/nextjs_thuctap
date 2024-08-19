import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox: React.FC<{}> = () => {
  return (
    <div className="border-[1px] border-rgb-custome-3 flexRow bg-[#fff] px-[14px] min-h-[50px] mr-[39px]">
      <input
        type="text"
        placeholder="Type in and hit Enter"
        className="border-none outline-none placeholder-rgb-custome-2 min-w-[420px]"
      />
      <button className="bg-none text-rgb-custome-2 text-24">
        <IoIosSearch className="bg-none" />
      </button>
    </div>
  );
};

export default SearchBox;
