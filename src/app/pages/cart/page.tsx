"use client";

import { ItemCart, Title } from "@/app/component";
import BoxPay from "@/app/component/other/BoxPay";
import Breadcrumb from "@/app/component/other/Breadcrumb";
import BodyContainer from "@/app/layout/BodyContainer";
import { useAppSelector } from "@/app/redux/store";
import { NextPage } from "next";
import React from "react";

const Page: NextPage<{}> = () => {
  const cart = useAppSelector((e) => e.cart.productList);
  return (
    <>
      <BodyContainer color="rgba(247, 247, 247, 1)">
        <Breadcrumb />
        <Title family="font-v2" fontSize="28" fontWeight={500}>
          CART
        </Title>
        <div className="flex flex-row w-full justify-between mt-[45px]">
          <div className="w-full max-w-[766px] bg-white p-[30px] flex flex-col gap-[28px]">
            {cart ? (
              cart.map((e) => <ItemCart key={e.id} product={e} />)
            ) : (
              <h1 className="text-center">Giỏ hàng trống</h1>
            )}
          </div>
          <BoxPay />
        </div>
        <div className="pb-[45px]"></div>
      </BodyContainer>
    </>
  );
};

export default Page;
