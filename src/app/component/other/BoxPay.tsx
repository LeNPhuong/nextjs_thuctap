import React from "react";
import Title from "./Title";
import Btn from "./Btn";
import SumaryCart from "./SumaryCart";

const BoxPay = () => {
  return (
    <div className="w-full max-w-[342px] bg-white p-[30px] self-start">
      <div className="">
        <Title family="font-v1" fontSize="23" fontWeight={500} marginBottom="16">
          Add Promo Code
        </Title>
        <input
          type="text"
          className="border-[1px] border-[#000] outline-none w-full min-h-[48px] max-h-[48px] px-[10px]"
        />
        <div className="mb-[15px]"></div>
        <Btn css="text-white text-14 font-lg font-v1 max-w-[133px] min-h-[49px] max-h-[49px]">ADD</Btn>
        <div className="mb-[33px]"></div>
        <SumaryCart />
        <div className="mb-[26px]"></div>
        <div className="flex flex-row justify-between">
          <Btn css="text-black bg-white border-[1px] text-14 font-lg border-[#000] font-v1 max-w-[133px] min-h-[49px] max-h-[49px]">
            CONTINUE SHOPPING
          </Btn>
          <Btn css="text-white text-14 font-lg font-v1 max-w-[133px] min-h-[49px] max-h-[49px]">PLACE ORDER</Btn>
        </div>
      </div>
    </div>
  );
};

export default BoxPay;
