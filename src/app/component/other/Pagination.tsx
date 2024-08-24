"use client";

import React, { SetStateAction } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const Pagination: React.FC<{
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  lengthPage: number;
}> = ({ page, setPage, lengthPage }) => {
  return (
    <div className="py-[40px]">
      <div className="flex flex-row">
        {Array.from({ length: lengthPage }, (_, e) => (
          <button
            key={e}
            className="w-[33px] h-[33px] border-[1px] border-black text-14 text-center mr-[10px]"
          >
            {e + 1}
          </button>
        ))}

        <button className="w-[33px] h-[33px] border-[1px] border-black text-14 text-center mr-[10px] flex justify-center items-center">
          <FaAngleRight />
        </button>
        <button className="w-[33px] h-[33px] border-[1px] border-black text-14 text-center flex justify-center items-center">
          <FaAnglesRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
