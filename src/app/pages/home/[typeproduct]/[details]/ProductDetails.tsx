import { Btn, Price, Title } from "@/app/component";
import Link from "next/link";
import React, { SetStateAction } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ProductDetails: React.FC<{
  setTrack: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setTrack }) => {
  return (
    <div className="bg-white p-[33px_30px] font-v1">
      <div className="w-full flex flex-row">
        <div className="w-full max-w-[67px] min-w-[67px] flexCol gap-[10px] mr-[15px]">
          <div className="w-full min-h-[67px] max-h-[67px] bg-rgb-custome-12"></div>
          <div className="w-full min-h-[67px] max-h-[67px] bg-rgb-custome-12"></div>
          <div className="w-full min-h-[67px] max-h-[67px] bg-rgb-custome-12"></div>
          <div className="w-full min-h-[67px] max-h-[67px] bg-rgb-custome-12"></div>
        </div>
        <div className="w-full min-w-[538px] max-w-[538px] min-h-[428px] max-h-[428px] bg-rgb-custome-12 mr-[25px]"></div>
        <div className="flexCol">
          <p className="text-14 font-lg mb-[5px]">BRAND</p>
          <Title family="font-v1" fontSize="26" fontWeight={400}>
            Product Name Goes Here
          </Title>
          <div className="flex flex-row items-center mt-[5px] mb-[10px]">
            <p className="color-[#fff] mr-[5px]">
              <FaRegHeart />
            </p>
            <p className="text-14 font-md">Add to Favourites</p>
          </div>
          <p className="text-14 font-md mb-[5px]">
            Nisl, do fames, consequat adipisicing. Recusandae platea neque, cum,
            accusamus
          </p>
          <Link href="" className="text-12 font-lg underline pb-[15px]">
            Read More
          </Link>
          <div className="flex flex-row items-center gap-[30px] mb-[15px]">
            <Price fontSize="17px" />
            <div className="border-[1px] border-[#000] text-black w-full max-w-[92px] min-h-[31px] flex items-center justify-center text-16 font-md">
              30% Off
            </div>
          </div>
          <p className="text-14 font-md mb-[20px]">
            You can track the price of this product
            <button
              onClick={() => setTrack((e) => !e)}
              className="underline font-lg inline-block ml-[10px]"
            >
              Track Rate
            </button>
          </p>
          <div className="flex flex-row gap-[15px] mb-[15px]">
            <Btn css="max-w-[145px] min-h-[49px] max-h-[49px] text-white text-16">
              ADD TO CART
            </Btn>
            <Btn css="max-w-[145px] min-h-[49px] max-h-[49px] text-white text-16">
              BUY NOW
            </Btn>
          </div>
          <div className="flex flex-row items-center mt-[5px] mb-[20px]">
            <p className="color-[#fff] mr-[5px]">
              <FaHeart />
            </p>
            <p className="text-16 font-md underline">Add to Favourites</p>
          </div>
          <div className="flex flex-row flex-wrap gap-[15px]">
            {Array.from({ length: 8 }, (_, e) => (
              <div
                key={e}
                className="w-full max-w-[94px] min-h-[33px] max-h-[33px] leading-[33px] text-center bg-rgb-custome-5 text-14"
              >
                Lorem Ipsem
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
