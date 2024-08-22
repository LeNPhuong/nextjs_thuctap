"use client";

import { Breadcrumb, Title } from "@/app/component";
import SumaryCart from "@/app/component/other/SumaryCart";
import BodyContainer from "@/app/layout/BodyContainer";
import { NextPage } from "next";
import React, { useState } from "react";
import Shipping from "./Shipping";
import Billing from "./Billing";

const page: NextPage<{}> = () => {
  const [range, setRange] = useState<number>(0);
  return (
    <>
      <BodyContainer>
        <Breadcrumb />
        <Title family="font-v2" fontSize="28" fontWeight={500}>
          CHECKOUT
        </Title>
        <div className="flex flex-row w-full justify-between mt-[35px] pb-[50px]">
          <div className="w-full max-w-[766px] bg-white p-[30px] flex flex-col">
            <div className="w-full relative mb-[15px]">
              <input
                type="range"
                className="absolute w-full z-[2] top-1/2 translate-y-[-50%] opacity-0"
                value={range}
                onChange={(e) => setRange(Number(e.target.value))}
              />
              <div className="w-full max-h-[4px] min-h-[4px] bg-black relative z-[1]">
                <div
                  style={{
                    left: range + "%",
                  }}
                  className="max-w-[25px] min-w-[25px] max-h-[25px] min-h-[25px] bg-black rounded-full absolute top-1/2 translate-y-[-50%]"
                ></div>
              </div>
            </div>

            <div className="w-full flexRowV3 mb-[25px]">
              <Title family="font-v1" fontSize="22" fontWeight={500} color={range < 50 ? "" : "rgba(190, 190, 190, 1)"}>
                Shipping Details
              </Title>
              <Title family="font-v1" fontSize="22" fontWeight={500} color={range > 50 ? "" : "rgba(190, 190, 190, 1)"}>
                Billing Details
              </Title>
            </div>

            {range > 50 ? (
              <Billing range={range} setRange={setRange} />
            ) : (
              <Shipping range={range} setRange={setRange} />
            )}
          </div>
          <div className="w-full max-w-[342px] bg-white p-[30px] self-start">
            <SumaryCart />
          </div>
        </div>
      </BodyContainer>
    </>
  );
};

export default page;
