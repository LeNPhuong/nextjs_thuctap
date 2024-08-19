import { dataFooter } from "@/app/mock/FooterData";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import ItemFooter from "./ItemFooter";
import TitleList from "./TitleList";
import BtnSub from "./BtnSub";

const FooterMain: React.FC<{}> = () => {
  return (
    <div className="w-full font-v1">
      <div className="p-[73px_0_63px_0] w-full">
        <div className="w-full flexRowV3">
          <div className="flexRow">
            <div className="flexCol items-start gap-[24px] mr-[80px]">
              <h1 className="font-md text-[33px]">YOUR LOGO</h1>
              <div className="flexRowV2 gap-[23px]">
                <span className="text-24">
                  <FaFacebookSquare />
                </span>
                <span className="text-24">
                  <FaTwitterSquare />
                </span>
                <span className="text-24">
                  <FaSquareGooglePlus />
                </span>
              </div>
            </div>

            <div className="flexRow mt-[7px]">
              {dataFooter?.map((e, index) => (
                <ItemFooter data={e} key={index} />
              ))}
            </div>
          </div>
          <div className="flexCol mt-[7px]">
            <TitleList>SUBSCRIBE</TitleList>
            <p className="text-14 font-md mb-[50px]">
              Subscribe to our newsletter, so that you can be the first to know about new offers and promotions.
            </p>
            <BtnSub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
