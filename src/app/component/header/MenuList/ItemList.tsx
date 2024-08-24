import { menuIF } from "@/app/mock/MenuData";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const ItemList: React.FC<{ data: menuIF }> = ({ data }) => {
  return (
    <li
      className={`uppercase text-14 font-md ${
        data.menuSub ? "flexRowV2 gap-[19px] group/list relative" : ""
      } py-[10px]`}
    >
      <Link href={`${data.strLink}`}>{data.name}</Link>
      {data.menuSub && <FaChevronDown />}
      {data.menuSub && (
        <div className="absolute shadow-custome2 w-[232px] top-[40px] bg-[#fff] p-[18px_0_5px_20px] group-hover/list:flex flex-col gap-[15px] hidden z-[1000]">
          {data.menuSub.map((e, index) => (
            <Link
              key={index}
              className="border-b-[1px] border-b-rgb-custome-5 pb-[10px]"
              href=""
            >
              {e.name}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default ItemList;
