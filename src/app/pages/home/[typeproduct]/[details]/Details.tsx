import { Title } from "@/app/component";
import ContentLayoutV2 from "@/app/layout/ContentLayoutV2";
import React from "react";

const Details = () => {
  return (
    <ContentLayoutV2>
      <Title family="font-v1" fontSize="22" fontWeight={500}>
        Product Name Goes Here
      </Title>
      <div className="pb-[10px]"></div>
      <p className="font-v1 text-14 mb-[45px]">
        Ad illum natoque volutpat leo curabitur est nisi reprehenderit quisque
        illo ullam scelerisque viverra taciti voluptatum adipiscing omnis vel
        augue convallis anim dis quis et molestiae, eos aenean corrupti neque?
      </p>
      <div className="pb-[115px]"></div>
      <div className="flex flex-row">
        <div className="w-full max-w-[50%]">
          <Title family="font-v1" fontSize="18" fontWeight={500}>
            Key Ingredients
          </Title>
          <ul className="flex flex-col gap-[15px] mt-[20px]">
            {Array.from({ length: 4 }, (_, e) => (
              <li key={e} className="flexRow items-center font-md text-14">
                <span className="min-w-[9px] max-w-[9px] min-h-[9px] max-h-[9px] border-[2px] border-[#000] rounded-full mr-[5px]"></span>
                Ingredient - Eget cursus officiis, consequuntur adipitin cidunt
                scinimano
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-[50%]">
          <Title family="font-v1" fontSize="18" fontWeight={500}>
            Key Benefits
          </Title>
          <ul className="flex flex-col gap-[15px] mt-[20px]">
            {Array.from({ length: 6 }, (_, e) => (
              <li key={e} className="flexRow items-center font-md text-14">
                <span className="min-w-[9px] max-w-[9px] min-h-[9px] max-h-[9px] border-[2px] border-[#000] rounded-full mr-[5px]"></span>
                Ingredient - Eget cursus officiis, consequuntur adipitin cidunt
                scinimano
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Title family="font-v1" fontSize="22" fontWeight={500}>
        How to Use?
      </Title>
      <div className="pb-[10px]"></div>
      <p className="font-v1 text-14 mb-[45px]">
        Ad illum natoque volutpat leo curabitur est nisi reprehenderit quisque
        illo ullam scelerisque viverra taciti voluptatum adipiscing omnis vel
        augue convallis anim dis quis et molestiae, eos aenean corrupti neque?
      </p>
      <div className="pb-[80px]"></div>
      <Title family="font-v1" fontSize="22" fontWeight={500}>
        All Ingredients
      </Title>
      <div className="pb-[10px]"></div>
      <p className="font-v1 text-14 mb-[45px]">
        Water, Brassica Alcohol, Glycerin, Neopentyl Glycol Diethylhexanoate,
        Propanediol, Bis-Stearyl Dimethicone, Trimethylpentanediol/Adipic Acid
        Copolymer, Butyrospermum Parkii (Shea) Butter, Dimethicone,
      </p>
      <div className="pb-[28px]"></div>
    </ContentLayoutV2>
  );
};

export default Details;
