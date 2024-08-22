import { InputForm, Title } from "@/app/component";
import BoxItem from "@/app/component/other/BoxItem";
import React from "react";

const CardDetails = () => {
  return (
    <div className="mt-[41px]">
      <Title family="font-v1" fontSize="18" marginBottom="25">
        Enter Card Details
      </Title>
      <div className="w-full flexRow flex-wrap gap-y-[22px]">
        <BoxItem bg="none" width="100%" center={false}>
          <InputForm fsz={14} width={308} height={45} gap={5} label="Card Number" />
        </BoxItem>
        <BoxItem bg="none" width="100%" center={false}>
          <InputForm fsz={14} width={308} height={45} gap={5} label="Card Number Name" />
        </BoxItem>{" "}
      </div>

      <Title family="font-v1" fontSize="14" marginTop="20" marginBottom="5">
        Expiry Date
      </Title>
      <div className="flex flex-row w-full max-w-[308px] justify-between">
        <BoxItem bg="none" width="28%" center={false}>
          <InputForm fsz={14} width={308 / 3} height={45} gap={5} labelOn={false} label="DD" />
        </BoxItem>{" "}
        <BoxItem bg="none" width="28%" center={false}>
          <InputForm fsz={14} width={308 / 3} height={45} gap={5} labelOn={false} label="MM" />
        </BoxItem>{" "}
        <BoxItem bg="none" width="28%" center={false}>
          <InputForm fsz={14} width={308 / 3} height={45} gap={5} labelOn={false} label="YYYY" />
        </BoxItem>{" "}
      </div>
      <div className="mb-[20px]"></div>
      <div className="flexRow items-center w-full mb-[22px]">
        <input type="checkbox" className="mr-[10px] rounded-none min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]" />
        <label className="font-v1 text-14 font-md">
          I agree to the <span className="inline-block underline">Terms & Conditions</span>
        </label>
      </div>
    </div>
  );
};

export default CardDetails;
