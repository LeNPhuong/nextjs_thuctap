import React from "react";
import BoxItem from "./BoxItem";

const Card: React.FC<{ tag: string }> = ({ tag }) => {
  return (
    <BoxItem>
      <div className="min-h-[250px] w-full bg-rgb-custome-5 relative">
        <img src="" className="w-full h-full object-cover" alt="" />
        <div className="absolute bottom-[15px] left-[15px] bg-[#000] w-full max-w-[64px] min-h-[24px] text-white text-center uppercase text-10 leading-[24px] font-v1">
          {tag}
        </div>
      </div>
      <div className="p-[10px_10px_0_10px] min-h-[97px] max-h-[97px] h-full">
        <h1 className="text-18 font-v1 font-lg mb-[3px]">Product Title Goes Here</h1>
        <h2 className="text-12 font-v1 font-md uppercase mb-[8px]">BRAND</h2>
        <div className="flexRowV3 font-v1 pb-[20px]">
          <div className="text-14">
            <p className="text-rgb-custome-8 mr-[10px] line-through inline-block">AED 32.00</p>
            <p className="text-rgb-custome-3 inline-block">AED 25.60</p>
          </div>
          <div className="border-[1px] border-[#000] text-black w-full max-w-[64px] min-h-[22px] flex items-center justify-center text-12">
            30% Off
          </div>
        </div>
      </div>
    </BoxItem>
  );
};

export default Card;
