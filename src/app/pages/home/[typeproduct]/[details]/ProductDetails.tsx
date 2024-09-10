import { Btn, Price, Title } from "@/app/component";
import { addProduct } from "@/app/redux/slice/cartSlice";
import { useAppDispatch } from "@/app/redux/store";
import Image from "next/image";
import Link from "next/link";
import React, { SetStateAction, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ProductDetails: React.FC<{
  setTrack: React.Dispatch<SetStateAction<boolean>>;
  product: any;
}> = ({ setTrack, product }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white p-[33px_30px] font-v1">
      <div className="w-full flex flex-row">
        <div className="w-full max-w-[67px] min-w-[67px] flexCol gap-[10px] mr-[15px]">
          <div className="w-full min-h-[67px] max-h-[67px] bg-rgb-custome-12"></div>
          <div className="w-full min-h-[67px] max-h-[67px] bg-rgb-custome-12"></div>
          <div className="w-full min-h-[67px] max-h-[67px] bg-rgb-custome-12"></div>
          <div className="w-full min-h-[67px] max-h-[67px] bg-rgb-custome-12"></div>
        </div>
        <div className="w-full min-w-[538px] max-w-[538px] min-h-[428px] max-h-[428px] bg-rgb-custome-12 mr-[25px]">
          <Image
            src={product.product_gallery[0]}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="image"
          />
        </div>
        <div className="flexCol">
          <p className="text-14 font-lg mb-[5px]">BRAND</p>
          <Title family="font-v1" fontSize="26" fontWeight={400}>
            {product.product_title}
          </Title>
          <div className="flex flex-row items-center mt-[5px] mb-[10px]">
            <p className="color-[#fff] mr-[5px]">
              <FaRegHeart />
            </p>
            <p className="text-14 font-md">Add to Favourites</p>
          </div>
          <p className="text-14 font-md mb-[5px]">
            {product.product_description}
          </p>
          <Link href="" className="text-12 font-lg underline pb-[15px]">
            Read More
          </Link>
          <div className="flex flex-row items-center gap-[30px] mb-[15px]">
            <Price
              price={product.product_price}
              priceSale={product.product_sale_price}
              fontSize="17px"
            />
            <div className="border-[1px] border-[#000] text-black w-full max-w-[92px] min-h-[31px] flex items-center justify-center text-16 font-md">
              {(
                (product.product_sale_price / product.product_price) *
                100
              ).toFixed(2)}
              % Off
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
            <Btn
              event={() =>
                dispatch(
                  addProduct({
                    id: product.id,
                    name: product.product_title,
                    price: product.product_price,
                    priceSale: product.product_sale_price,
                    img: product.product_gallery[0],
                    quantity: 1,
                  }),
                )
              }
              css="max-w-[145px] min-h-[49px] max-h-[49px] text-white text-16"
            >
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
            {product.product_grip.concat(product.product_size).map((e: any) => (
              <div
                key={e}
                className="w-full max-w-[94px] min-h-[33px] max-h-[33px] leading-[33px] text-center bg-rgb-custome-5 text-14 cursor-pointer"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
