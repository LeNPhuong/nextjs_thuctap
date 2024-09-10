"use client";

import React, { useActionState, useEffect, useState } from "react";
import Title from "./Title";
import FieldCart from "./FieldCart";
import { useAppSelector } from "@/app/redux/store";

const SumaryCart: React.FC<{}> = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const cart = useAppSelector((e) => e.cart.productList);
  console.log(cart);

  useEffect(() => {
    const total: number | undefined = cart?.reduce(
      (acc, curr) => acc + curr.quantity,
      0,
    );

    if (total) {
      setTotalPrice((e) => total);
    } else {
      setTotalPrice(0);
    }
  }, [cart]);

  return (
    <>
      <Title family="font-v1" fontSize="23" fontWeight={500} marginBottom="16">
        Summary
      </Title>
      <div className="mb-[15px]"></div>
      <FieldCart
        title={`Price (${String(totalPrice)} items)`}
        result={
          `${cart?.reduce(
            (acc, curr) => acc + curr.quantity * curr.price,
            0,
          )}` + " đ"
        }
      />
      <FieldCart
        title="Delivery Charge"
        result={`${cart?.reduce(
          (acc, curr) => acc + curr.quantity * curr.priceSale,
          0,
        )} đ`}
      />
      <FieldCart
        title="Total Price"
        result={
          `${cart?.reduce(
            (acc, curr) => acc + curr.quantity * (curr.price - curr.priceSale),
            0,
          )}` + " đ"
        }
      />
    </>
  );
};

export default SumaryCart;
