import React from "react";
import Btn from "./Btn";

const Banner: React.FC<{ content1: String; content2: String; img: string }> = ({ content1, content2, img }) => {
  return (
    <div className="mt-[50px] w-full bg-rgb-custome-5 h-[177px] min-h-[177px] max-h-[177px] relative">
      <img src={img} className="object-cover h-full w-full" alt="" />
      <div className="absolute right-[45px] top-[50%] translate-y-[-50%]">
        <div className="flexRowV2">
          <div className="flexCol mr-[73px]">
            <h1 className="text-[51px] font-v1 font-lg">{content1}</h1>
            <p className="text-[37px] font-v1 font-sm">{content2}</p>
          </div>
          <Btn css="bg-[#fff] border-[1px] border-[#000] w-full min-w-[160px] max-w-[160px] min-h-[63px] font-lg font-v1">
            SHOP NOW
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
