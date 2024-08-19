import React from "react";
import SearchBox from "./SearchBox";
import Cart from "./Cart";
import User from "./User";

const BoxService: React.FC<{}> = () => {
  return (
    <div className="bg-rgb-custome-1">
      <div className="max-w-[1144px] mx-auto h-full">
        <div className="flexRowV1 h-full min-h-[88px] max-h-[88px]">
          <h1 className="font-md text-[39px]">YOUR LOGO</h1>
          <div className="flexRow">
            <SearchBox />
            <div className="flexRowV2 gap-[23px]">
              <Cart />
              <User />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxService;
