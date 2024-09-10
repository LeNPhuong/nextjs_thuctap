"use client";

import { Card, Spiner, Title } from "@/app/component";
import BoxItem from "@/app/component/other/BoxItem";
import Breadcrumb from "@/app/component/other/Breadcrumb";
import Pagination from "@/app/component/other/Pagination";
import BodyContainer from "@/app/layout/BodyContainer";
import ProductLayout from "@/app/layout/ProductLayout";
import { getProduct } from "@/app/service/productApi";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

const Page: NextPage<{}> = () => {
  const [page, setPage] = useState<number>(0);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    (async function () {
      const rq = await getProduct();
      setProduct(rq.data);
    })();
  }, []);

  if (!product) {
    return <Spiner />;
  }

  return (
    <>
      <BodyContainer color="rgba(247, 247, 247, 1)">
        <Breadcrumb />
        <Title family="font-v2" fontSize="28" fontWeight={500}>
          MAKEUP
        </Title>
        <div className="pb-[60px]"></div>
        <ProductLayout>
          {product.map((data: any, e: any) => (
            <BoxItem key={e} center={false} width="262px">
              <Card
                width="262px"
                center={false}
                tag="makup"
                key={e}
                data={data}
                link={`/pages/home/makeup/${data.id}`}
              />
            </BoxItem>
          ))}
        </ProductLayout>
        <Pagination page={page} setPage={setPage} lengthPage={4} />
      </BodyContainer>
    </>
  );
};

export default Page;
