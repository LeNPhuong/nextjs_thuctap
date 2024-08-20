"use client";

import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
import React from "react";

const Breadcrumb = () => {
  const pathname = usePathname();

  return (
    <div className="pt-[28px] mb-[45px]">
      <div className="flex flex-row items-center">
        {pathname.split("/").some((e) => e === "home") ? null : (
          <p className="capitalize text-12 font-v1 flex flex-row items-center mr-[15px]">
            <span className="mr-[15px]">home</span>
            <FaAngleRight />
          </p>
        )}
        {pathname.split("/").map(
          (e: string, index: number) =>
            e.length !== 0 &&
            e !== "pages" && (
              <p key={index} className="capitalize text-12 font-v1 flex flex-row items-center mr-[15px]">
                <span className="mr-[15px]">{e}</span>
                {e === pathname.split("/")[pathname.split("/").length - 1] ? "" : <FaAngleRight />}
              </p>
            ),
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
