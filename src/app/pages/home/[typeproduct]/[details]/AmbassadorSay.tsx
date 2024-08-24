import { Btn, Title } from "@/app/component";
import { FaChevronDown } from "react-icons/fa";
import React from "react";

const AmbassadorSay = () => {
  return (
    <div className="w-full max-w-[480px]">
      <div className="w-full flexRow mb-[20px]">
        <div className="w-full flexRow justify-between it">
          <div className="flex flex-row items-center w-full">
            <div className="w-full max-w-[66px] min-h-[66px] max-h-[66px] bg-rgb-custome-8 rounded-full mr-[15px]"></div>
            <div className="">
              <Title family="font-v1" fontSize="18" fontWeight={400}>
                Name Surname
              </Title>
              <Btn css="max-w-[93px] min-h-[22px] max-h-[22px] rounded-full text-[10px] font-md text-[#000] bg-white border-[1px] border-[#000]">
                AMBASSADOR
              </Btn>
            </div>
          </div>
          <Btn css="max-w-[145px] min-h-[49px] max-h-[49px] text-white text-16">
            SHOP WITH ME
          </Btn>
        </div>
      </div>
      <p className="font-v2 text-14 mb-[45px]">
        Pede dis ipsum placeat do exercitation laborum nostra non
      </p>
      <Title family="font-v1" fontSize="18" fontWeight={400}>
        What I love about this product
      </Title>
      <div className="mb-[5px]"></div>
      <div className="flexRow flex-wrap gap-[15px] mb-[25px]">
        {Array.from({ length: 4 }, (_, e) => (
          <div
            key={e}
            className="w-full max-w-[94px] min-h-[33px] max-h-[33px] leading-[33px] text-center bg-rgb-custome-5 text-14"
          >
            Lorem Ipsem
          </div>
        ))}
      </div>
      <button className="w-full max-w-[105px] min-h-[31px] max-h-[31px] border-[1px] border-[#000] bg-[#fff] text-14 flex flex-row justify-center items-center gap-[5px] mx-auto">
        <FaChevronDown />
        View More
      </button>
    </div>
  );
};

export default AmbassadorSay;
