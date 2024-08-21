"use client";

import { Card, Title } from "@/app/component";
import Breadcrumb from "@/app/component/other/Breadcrumb";
import Pagination from "@/app/component/other/Pagination";
import BodyContainer from "@/app/layout/BodyContainer";
import ProductLayout from "@/app/layout/ProductLayout";
import { NextPage } from "next";
import React, { useState } from "react";

const page: NextPage<{}> = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <BodyContainer color="rgba(247, 247, 247, 1)">
        <Breadcrumb />
        <Title family="font-v2" fontSize="28" fontWeight={500}>
          MAKEUP
        </Title>
        <div className="pb-[60px]"></div>
        <ProductLayout>
          {Array.from({ length: 16 }, (_, e) => (
            <Card width="262px" center={false} tag="makup" key={e} />
          ))}
        </ProductLayout>
        <Pagination page={page} setPage={setPage} lengthPage={4} />
      </BodyContainer>
    </>
  );
};

export default page;
