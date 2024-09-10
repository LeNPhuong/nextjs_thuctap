import React from "react";
import BoxItem from "./BoxItem";
import LabelCard from "./LabelCard";
import UserCard from "./UserCard";
import Price from "./Price";
import Link from "next/link";
import Image from "next/image";

const Card: React.FC<{
  tag: string;
  center: boolean;
  width: string;
  bgColor?: string;
  data?: any;
  link?: string;
}> = ({ tag, center, width, bgColor, data, link }) => {
  return (
    <BoxItem center={center} width={width}>
      <Link href={`${link || ""}`}>
        <div className="min-h-[250px] w-full bg-rgb-custome-5 relative z-[10]">
          <Image
            src={
              data?.product_gallery[0] ||
              "https://is5-ssl.mzstatic.com/image/thumb/Purple111/v4/d5/75/99/d5759986-1f79-9ee2-f092-86f7b74eeee4/source/512x512bb.jpg"
            }
            width={0}
            height={0}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            sizes="100vw"
            alt="Picture of the author"
          />
          <div className="absolute bottom-[15px] left-[15px] bg-[#000] w-full max-w-[64px] min-h-[24px] text-white text-center uppercase text-10 leading-[24px] font-v1">
            tag
          </div>
          <UserCard />
        </div>
        <div
          style={{
            background: bgColor ? bgColor : "none",
          }}
          className="p-[10px_10px_0_10px] min-h-[97px] max-h-[97px] h-full z-[10] relative"
        >
          <h1 className="text-18 font-v1 font-lg mb-[3px]">
            {data?.product_title || "Product Title Goes Here"}
          </h1>
          <h2 className="text-12 font-v1 font-md uppercase mb-[8px]">BRAND</h2>
          <div className="flexRowV3 font-v1 pb-[20px]">
            <Price />
            <div className="border-[1px] border-[#000] text-black w-full max-w-[64px] min-h-[22px] flex items-center justify-center text-12">
              30% Off
            </div>
          </div>
        </div>

        {true && <LabelCard />}
      </Link>
    </BoxItem>
  );
};

export default Card;
