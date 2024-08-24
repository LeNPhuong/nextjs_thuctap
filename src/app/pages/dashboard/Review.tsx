import { Btn, Card, Title } from "@/app/component";
import React from "react";

const Review = () => {
  return (
    <>
      <Title family="font-v1" fontSize="25" fontWeight={400} marginBottom="12">
        Reviewed 16 Products
      </Title>
      <Btn css="max-w-[145px] max-h-[49px] text-16 min-h-[49px] uppercase text-white mb-[30px]">
        ADD NEW REVIEW
      </Btn>
      <div className="w-full flex flex-row flex-wrap bg-white px-[120px] gap-y-[30px]">
        {Array.from({ length: 12 }, (_, e) => (
          <Card
            bgColor="rgba(247, 247, 247, 1)"
            width="30%"
            center={true}
            key={e}
            tag="makup"
          />
        ))}
      </div>
    </>
  );
};

export default Review;
