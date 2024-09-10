"use client";

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Card,
  ContainerItems,
  Spiner,
  Title,
} from "@/app/component";
import { NextPage } from "next";
import BodyContainer from "@/app/layout/BodyContainer";
import ProductDetails from "./ProductDetails";
import BoxAmbassador from "./BoxAmbassador";
import Details from "./Details";
import BoxReview from "./BoxReview";
import ProductLayoutV2 from "@/app/layout/ProductLayoutV2";
import Track from "./Track";
import { getDetails } from "@/app/service/productApi";
import { useParams, useSearchParams } from "next/navigation";

const Page: NextPage<{}> = ({}) => {
  const params = useParams<{ details: string }>();
  const [product, setProduct] = useState(null);
  const [track, setTrack] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      const details = params.details;
      const rq = await getDetails(details);
      setProduct(rq.data);
    })();
  }, [params]);

  if (!product) {
    return <Spiner />;
  }

  return (
    <div className="">
      {track && <Track setTrack={setTrack} />}

      <BodyContainer>
        <Breadcrumb />
        <ProductDetails setTrack={setTrack} product={product} />
        <div className="pb-[35px]"></div>
        <BoxAmbassador />
        <div className="pb-[35px]"></div>
        <Details />
        <div className="pb-[35px]"></div>
        <BoxReview />
        <div className="pb-[35px]"></div>
      </BodyContainer>
      <BodyContainer color="#fff">
        <div className="pt-[35px]"></div>
        <Title family="font-v1" fontSize="26" fontWeight={500}>
          RELATED PRODUCTS
        </Title>
        <div className="pb-[22px]"></div>
        <ProductLayoutV2>
          {Array.from({ length: 8 }, (_, e) => (
            <ContainerItems key={e}>
              <Card width="262px" center={true} tag="CATEGORY" />
            </ContainerItems>
          ))}
        </ProductLayoutV2>
        <div className="pb-[40px]"></div>
      </BodyContainer>
    </div>
  );
};

export default Page;
