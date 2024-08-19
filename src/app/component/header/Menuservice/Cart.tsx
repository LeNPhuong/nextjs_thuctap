import React from "react";
import { IoCartSharp } from "react-icons/io5";

const Cart: React.FC<{}> = () => {
  return (
    <button className="flexRowV2 border-r-[1px] text-black border-[#000] max-h-[26px] gap-[13px] pr-[23px]">
      <span className="text-16 font-md">Cart</span>
      <span className="text-24">
        <IoCartSharp />
      </span>
    </button>
  );
};

export default Cart;
