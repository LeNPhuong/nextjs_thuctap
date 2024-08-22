import React from "react";
import Title from "./Title";
import FieldCart from "./FieldCart";

const SumaryCart: React.FC<{}> = () => {
  return (
    <>
      <Title family="font-v1" fontSize="23" fontWeight={500} marginBottom="16">
        Summary
      </Title>
      <div className="mb-[15px]"></div>
      <FieldCart title="Price (4 items)" result="AED 128.60" />
      <FieldCart title="Delivery Charge" result="AED 15.00" />
      <FieldCart title="Total Price" result="AED 143.00" />
    </>
  );
};

export default SumaryCart;
