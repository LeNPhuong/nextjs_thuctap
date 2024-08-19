import React from "react";
import FooterMain from "./FooterMain/FooterMain";
import BoxContent from "./BoxContent";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiLogoVisa } from "react-icons/bi";
import { FaCcMastercard } from "react-icons/fa6";

const Footer: React.FC<{}> = () => {
  return (
    <footer className="">
      <div className="bg-rgb-custome-1">
        <BoxContent>
          <FooterMain />
        </BoxContent>
      </div>

      <div className="bg-[#fff] font-v1">
        <BoxContent>
          <div className="h-[94px] w-full flexRowV1">
            <p className="text-14 font-md">© 2018. All Rights Reserved.</p>
            <div className="flexRowV2 gap-[23px]">
              <span className="text-[26px]">
                <BsShieldFillCheck />
              </span>
              <span className="text-[26px]">
                <FaCcMastercard />
              </span>
              <span className="text-[26px]">
                <BiLogoVisa />
              </span>
            </div>
          </div>
        </BoxContent>
      </div>
    </footer>
  );
};

export default Footer;
