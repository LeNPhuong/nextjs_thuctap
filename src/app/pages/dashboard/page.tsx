"use client";

import { Breadcrumb, Title } from "@/app/component";
import BodyContainer from "@/app/layout/BodyContainer";
import { dashboardData } from "@/app/mock/EnumData";
import { NextPage } from "next";
import React, { useState } from "react";
import Review from "./Review";
import Analytics from "./Analytics";

const page: NextPage<{}> = ({}) => {
  const [view, setView] = useState<number>(dashboardData.REVIEWED);

  return (
    <>
      <BodyContainer>
        <Breadcrumb />
        <Title
          family="font-v2"
          fontSize="28"
          fontWeight={500}
          marginBottom="30"
        >
          DASHBOARD
        </Title>
        <div className="bg-white font-v1">
          <div className="flexCol items-center">
            <div className="pt-[60px]"></div>
            <Title
              family="font-v1"
              fontSize="25"
              fontWeight={400}
              marginBottom="80"
            >
              Welcome NAME SURNAME
            </Title>
            <div className="max-w-[153px] min-w-[153px] max-h-[153px] min-h-[153px] bg-[#E3E3E3] mb-[55px]"></div>

            <div className="flex flex-row pl-[50px] item self-start w-full mb-[42px]">
              <div
                onClick={() => setView(dashboardData.REVIEWED)}
                style={{
                  borderWidth: "1px",
                  borderColor:
                    view === dashboardData.REVIEWED ? "#fff" : "#000",
                  borderStyle: "solid",
                }}
                className="text-14 font-md w-full max-w-[175px] min-h-[54px] max-h-[54px] text-center leading-[54px] cursor-pointer"
              >
                REVIEWED PRODUCTS
              </div>

              <div
                onClick={() => setView(dashboardData.ANALYTICS)}
                style={{
                  borderWidth: "1px",
                  borderColor:
                    view === dashboardData.ANALYTICS ? "#fff" : "#000",
                  borderStyle: "solid",
                }}
                className="text-14 font-md w-full max-w-[175px] min-h-[54px] max-h-[54px] text-center leading-[54px] cursor-pointer"
              >
                ANALYTICS
              </div>
            </div>

            {dashboardData.REVIEWED === view && <Review />}
            {dashboardData.ANALYTICS === view && <Analytics />}

            <div className="mb-[120px]"></div>
          </div>
        </div>
        <div className="pb-[70px]"></div>
      </BodyContainer>
    </>
  );
};

export default page;
