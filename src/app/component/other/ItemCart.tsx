import React from "react";
import Price from "./Price";
import Btn from "./Btn";
import { add, des, productType, remove } from "@/app/redux/slice/cartSlice";
import { useAppDispatch } from "@/app/redux/store";
import Image from "next/image";

const ItemCart: React.FC<{ product: productType }> = ({ product }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="h-full font-v1 pb-[30px] border-b-[1px] border-b-rgb-custome-11">
      <div className="max-h-[113px] h-full flex flex-row relative">
        <div className="h-full mr-[26px]">
          <Image
            src={product.img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="image"
          />
        </div>
        <div className="h-full flex flex-col justify-between">
          <h1 className="text-[23px] font-lg">{product.name}</h1>
          <Price price={product.price} priceSale={product.priceSale} />
          <div className="flex flex-row items-center gap-[7px]">
            <button
              onClick={() => dispatch(add({ id: product.id }))}
              className="text-24 w-full max-w-[38px] max-h-[31px] min-h-[31px] leading-[31px] bg-rgb-custome-5"
            >
              +
            </button>
            <p className="w-full max-w-[38px] max-h-[31px] min-h-[31px] border-[1px] border-black text-center leading-[25px] text-14 font-lg">
              {product.quantity}
            </p>
            <button
              onClick={() => dispatch(des({ id: product.id }))}
              className="text-24 w-full max-w-[38px] max-h-[31px] min-h-[31px] leading-[31px] bg-rgb-custome-5"
            >
              -
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 translate-y-[-50%]">
          <Btn
            event={() => dispatch(remove({ id: product.id }))}
            css="bg-white border-[1px] border-[#000] min-w-[145px] max-w-[145px] min-h-[49px] max-h-[49px]"
          >
            Remove
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
