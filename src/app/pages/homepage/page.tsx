"use client";

import { Ambassadors, BoxOverview, Card, ContainerItems, Slidebar, Title } from "@/app/component";
import Banner from "@/app/component/other/Banner";
import BodyContainer from "@/app/layout/BodyContainer";
import ContentLayout from "@/app/layout/ContentLayout";
import ProductLayout from "@/app/layout/ProductLayout";
import ProductLayoutV2 from "@/app/layout/ProductLayoutV2";

import { NextPage } from "next";
import React from "react";

const page: NextPage<{}> = () => {
  return (
    <>
      <Slidebar />
      <BodyContainer color="rgba(247, 247, 247, 1)">
        <ContentLayout>
          <Title marginBottom="50" linkRef="#" family="font-v2" fontWeight={500} fontSize="28">
            NEW ARRIVALS
          </Title>
          <ProductLayout>
            <BoxOverview />
            {Array.from({ length: 4 }, (_, e) => (
              <Card tag="CATEGORY" key={e} />
            ))}
            <BoxOverview />
          </ProductLayout>
          <div className="mt-[55px]"></div>
          <Title marginBottom="50" linkRef="#" family="font-v2" fontWeight={500} fontSize="28">
            NEW ARRIVALS
          </Title>
          <ProductLayoutV2>
            {Array.from({ length: 8 }, (_, e) => (
              <ContainerItems key={e}>
                <Card tag="CATEGORY" />
              </ContainerItems>
            ))}
          </ProductLayoutV2>
          <Banner content1="50% OFF" content2="On All Items" img="" />

          <div className="mt-[55px]"></div>
          <Title marginBottom="50" linkRef="#" family="font-v2" fontWeight={500} fontSize="28">
            TOP SELLERS
          </Title>
          <ProductLayoutV2>
            {Array.from({ length: 8 }, (_, e) => (
              <ContainerItems key={e}>
                <Card tag="CATEGORY" />
              </ContainerItems>
            ))}
          </ProductLayoutV2>
          <Banner content1="35% OFF" content2="All SKINCARE Items" img="" />
        </ContentLayout>
      </BodyContainer>
      <BodyContainer color="#fff">
        <div className="mt-[55px]"></div>
        <Title marginBottom="50" linkRef="#" family="font-v2" fontWeight={500} fontSize="28">
          AMBASSADORS
        </Title>
        <ProductLayoutV2>
          {Array.from({ length: 8 }, (_, e) => (
            <ContainerItems key={e}>
              <Ambassadors />
            </ContainerItems>
          ))}
        </ProductLayoutV2>
      </BodyContainer>
      <div className="pb-[55px]"></div>
    </>
  );
};

export default page;
