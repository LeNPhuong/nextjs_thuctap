"use client";

import { Btn, InputForm, Price, Title } from "@/app/component";
import { IoMdClose } from "react-icons/io";
import React, { SetStateAction } from "react";

const Track: React.FC<{
  setTrack: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setTrack }) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-[9999] bg-[#0000008e] font-v1">
      <div className="bg-[#fff] max-w-[479px] mx-auto mt-[190px] p-[40px] relative">
        <div className="w-full">
          <div className="flex flexRow w-full mb-[40px]">
            <div className="w-full min-w-[116px] max-w-[116px] min-h-[107px] max-h-[107px] bg-rgb-custome-6 mr-[25px]"></div>
            <div className="flexCol w-full">
              <Title family="font-v1" fontSize="14" fontWeight={500}>
                BRAND
              </Title>
              <Title family="font-v1" fontSize="26" fontWeight={400}>
                Product Name Goes Here
              </Title>
              <div className="mb-[22px]"></div>
              <div className="flexRow justify-between items-center w-full">
                <Price fontSize="17px" />
                <div className="border-[1px] border-[#000] text-black w-full max-w-[92px] min-h-[31px] flex items-center justify-center text-16 font-md">
                  30% Off
                </div>
              </div>
            </div>
          </div>
          <InputForm
            label="Desired price"
            height={50}
            width={169}
            placeHolder="Enter Desired price here"
          />
          <div className="mb-[25px]"></div>
          <InputForm
            label="Email Address"
            height={50}
            placeHolder="Enter Desired price here"
          />
          <div className="mb-[25px]"></div>
          <p className="text-[#000] text-[14px] mb-[45px]">
            When price of this product hits your desired price, we will notify
            you by sending an email.
          </p>
          <Btn css="max-w-[145px] min-h-[49px] max-h-[49px] text-white text-16 mx-auto">
            TRACK PRICE
          </Btn>
        </div>
        <button
          onClick={() => setTrack((e) => !e)}
          className="absolute max-w-[26px] min-w-[26px] max-h-[26px] min-h-[26px] rounded-full shadow-[0px_0px_2px_#000] bg-white right-0 top-0 translate-x-[50%] translate-y-[-50%]"
        >
          <span className="flexRow justify-center items-center text-18">
            <IoMdClose />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Track;
