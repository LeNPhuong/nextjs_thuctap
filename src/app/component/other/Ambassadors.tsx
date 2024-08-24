import React from "react";
import BoxItem from "./BoxItem";
import Title from "./Title";
import Btn from "./Btn";
import { FaFacebookSquare, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Ambassadors: React.FC<{
  center: boolean;
  width: string;
  onBtn: boolean;
  des: boolean;
}> = ({ center, width, onBtn, des }) => {
  return (
    <BoxItem center={center} width={width}>
      <div className="flexRowV2 bg-white shadow-custome3 my-[8px]">
        <div className="w-full p-[30px_55px] flexCol items-center">
          <div className="w-full min-w-[143px] max-w-[143px] min-h-[143px] max-h-[143px] bg-[#EBEBEB] rounded-full "></div>
          <Title family="font-v1" fontWeight={400} fontSize="22" marginTop="21">
            Name Surname
          </Title>
          <Btn css="max-w-[109px] min-h-[29px] max-h-[29px] rounded-full border-[1px] border-[#000] font-v1 text-10 bg-[#fff] mt-[10px]">
            @username
          </Btn>
          <div className="flexRow gap-[23px] mt-[15px]">
            <span className="text-24">
              <FaFacebookSquare />
            </span>
            <span className="text-24">
              <FaTwitterSquare />
            </span>
            <span className="text-24">
              <FaYoutube />
            </span>
          </div>
          {onBtn && (
            <Btn css="max-w-[145px] min-h-[49px] max-h-[49px] font-v1 text-16 font-lg mt-[10px] text-white mt-[30px]">
              SHOP WITH ME
            </Btn>
          )}
          {des && (
            <p className="pt-[70px] font-v1 font-md text-[14px] bg-white text-center">
              Enim expedita torquent! Animi sunt beatae laoreet nec. Euismod
              rutrum pariatur! Nunc dolorum nisl eum quos quisquam ea. Nobis
              Perspiciatis
            </p>
          )}
        </div>
      </div>
    </BoxItem>
  );
};

export default Ambassadors;
