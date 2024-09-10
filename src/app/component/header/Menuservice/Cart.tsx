"use client";

import { useAppSelector } from "@/app/redux/store";
import Link from "next/link";
import React from "react";
import { IoCartSharp } from "react-icons/io5";

const Cart: React.FC<{}> = () => {
  const cart = useAppSelector((e) => e.cart.productList);
  return (
    <Link href="/pages/cart">
      <button className="flexRowV2 border-r-[1px] text-black border-[#000] max-h-[26px] gap-[13px] pr-[23px] relative">
        <span className="text-16 font-md">Cart</span>
        <span className="text-24">
          <IoCartSharp />
        </span>
        {cart && (
          <div className="bg-black rounded-full w-[20px] h-[20px] absolute right-[15px] top-[-10px] text-[#fff] text-10 leading-[20px]">
            {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
          </div>
        )}
      </button>
    </Link>
  );
};

export default Cart;
