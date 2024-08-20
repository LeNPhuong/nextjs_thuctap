import { ItemCart, Title } from "@/app/component";
import BoxPay from "@/app/component/other/BoxPay";
import Breadcrumb from "@/app/component/other/Breadcrumb";
import BodyContainer from "@/app/layout/BodyContainer";
import { NextPage } from "next";
import React from "react";

const page: NextPage<{}> = () => {
  return (
    <>
      <BodyContainer color="rgba(247, 247, 247, 1)">
        <Breadcrumb />
        <Title family="font-v2" fontSize="28" fontWeight={500}>
          CART
        </Title>
        <div className="pb-[45px]"></div>
        <div className="flex flex-row w-full justify-between">
          <div className="w-full max-w-[766px] bg-white p-[30px] flex flex-col gap-[28px]">
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />

          </div>
          <BoxPay />
        </div>
        <div className="pb-[45px]"></div>
      </BodyContainer>
    </>
  );
};

export default page;
