"use client";

import BoxItem from "@/app/component/other/BoxItem";
import React, { useState } from "react";

const BoxGender = () => {
  const [gender, setGender] = useState<string>("");
  return (
    <BoxItem bg="none" width="50%" center={false}>
      <p className="text-14 font-md mb-[5px]">Gender</p>
      <div className="w-full max-w-[308px] border-[1px] border-black h-full min-h-[45px] max-h-[45px]">
        <div className="flexRow justify-between items-center w-full h-full px-[18px]">
          <div className="flex flex-row items-center gap-[10px] relative">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="relative z-[2] opacity-0"
              onChange={(e) => setGender(e.target.value)}
            />
            <div className="left-[-2px] absolute border-[2px] border-[#000] min-w-[18px] max-w-[18px] min-h-[18px] max-h-[18px] rounded-full flex items-center justify-center z-[1]">
              {gender === "Male" && (
                <div className="min-w-[10px] max-w-[10px] min-h-[10px] max-h-[10px] rounded-full bg-rgb-custome-13"></div>
              )}
            </div>
            <label htmlFor="">Male</label>
          </div>
          <div className="flex flex-row items-center gap-[10px] relative">
            <input
              type="radio"
              name="gender"
              value="Female"
              className="relative z-[2] opacity-0"
              onChange={(e) => setGender(e.target.value)}
            />
            <div className="left-[-2px] absolute border-[2px] border-[#000] min-w-[18px] max-w-[18px] min-h-[18px] max-h-[18px] rounded-full flex items-center justify-center z-[1]">
              {gender === "Female" && (
                <div className="min-w-[10px] max-w-[10px] min-h-[10px] max-h-[10px] rounded-full bg-rgb-custome-13"></div>
              )}
            </div>
            <label htmlFor="">Female</label>
          </div>
        </div>
      </div>
    </BoxItem>
  );
};

export default BoxGender;
