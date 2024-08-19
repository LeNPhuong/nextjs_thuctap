import React from "react";
import Btn from "./Btn";

const BoxOverview: React.FC<{}> = () => {
  return (
    <div className="w-full max-w-[557px] bg-rgb-custome-5 min-h-[359px] max-h-[359px] relative">
      <img src="" className="w-full h-full object-cover" alt="" />
      <Btn css="max-w-[160px] min-h-[63px] absolute bottom-[28px] bg-[#fff] text-black right-1/2 translate-x-[50%] border-[1px] border-[#000] text-16 font-v1 font-lg">
        SHOP NOW
      </Btn>
    </div>
  );
};

export default BoxOverview;
