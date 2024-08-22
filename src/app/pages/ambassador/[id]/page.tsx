import { Ambassadors, Card, Slidebar } from "@/app/component";
import BodyContainer from "@/app/layout/BodyContainer";
import ProductLayout from "@/app/layout/ProductLayout";
import React from "react";

const page = () => {
  return (
    <>
      <BodyContainer>
        <div className="pt-[35px]"></div>
        <Ambassadors des={true} onBtn={false} center={true} width="100%" />
        <Slidebar />
        <ProductLayout bg="#fff" top="45" bottom="105">
          <Card width="25%" center={true} tag="" />
          <Card width="25%" center={true} tag="" />
          <Card width="25%" center={true} tag="" />
          <Card width="25%" center={true} tag="" />
          <Card width="25%" center={true} tag="" />
          <Card width="25%" center={true} tag="" />
        </ProductLayout>
        <div className="pb-[55px]"></div>
      </BodyContainer>
    </>
  );
};

export default page;
