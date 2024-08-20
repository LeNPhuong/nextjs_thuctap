import React from "react";
import Price from "./Price";
import Btn from "./Btn";

const ItemCart = () => {
  return (
    <div className="h-full font-v1 pb-[30px] border-b-[1px] border-b-rgb-custome-11">
      <div className="max-h-[113px] h-full flex flex-row relative">
        <div className="h-full mr-[26px]">
          <img
            src="https://is5-ssl.mzstatic.com/image/thumb/Purple111/v4/d5/75/99/d5759986-1f79-9ee2-f092-86f7b74eeee4/source/512x512bb.jpg"
            alt=""
            className="object-cover h-full"
          />
        </div>
        <div className="h-full flex flex-col justify-between">
          <h1 className="text-[23px] font-lg">Product Title Goes Here</h1>
          <Price />
          <div className="flex flex-row items-center gap-[7px]">
            <button className="text-24 w-full max-w-[38px] max-h-[31px] min-h-[31px] leading-[31px] bg-rgb-custome-5">
              +
            </button>
            <p className="w-full max-w-[38px] max-h-[31px] min-h-[31px] border-[1px] border-black text-center leading-[25px] text-14 font-lg">
              1
            </p>
            <button className="text-24 w-full max-w-[38px] max-h-[31px] min-h-[31px] leading-[31px] bg-rgb-custome-5">
              -
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 translate-y-[-50%]">
          <Btn css="bg-white border-[1px] border-[#000] min-w-[145px] max-w-[145px] min-h-[49px] max-h-[49px]">
            Remove
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
