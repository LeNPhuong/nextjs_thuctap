import { Btn, InputForm, Title } from "@/app/component";
import BoxItem from "@/app/component/other/BoxItem";
import React, { SetStateAction } from "react";
import CardDetails from "./CardDetails";

const Billing: React.FC<{ range: number; setRange: React.Dispatch<SetStateAction<number>> }> = ({
  range,
  setRange,
}) => {
  return (
    <div className="w-full font-v1">
      <div className="flexRow items-center w-full mb-[22px]">
        <input type="checkbox" className="mr-[10px] rounded-none min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]" />
        <label className="font-v1 text-14 font-md block">Same as Shipping Address</label>
      </div>

      <div className="w-full">
        <div className="w-full max-w-[50%]">
          <label htmlFor="" className="text-14 mb-[5px] block">
            Type of Address
          </label>
          <select
            name=""
            id=""
            className="w-full max-w-[308px] text-14 outline-none border-[1px] border-[#000] max-h-[40px] min-h-[40px] font-md"
          >
            <option value="">Personal</option>
          </select>
        </div>
        <div className="pb-[15px]"></div>
        <div className="w-full flexRow flex-wrap gap-y-[22px]">
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm fsz={14} width={308} height={45} gap={5} label="First Name" />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm fsz={14} width={308} height={45} gap={5} label="Last Name" />
          </BoxItem>{" "}
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm fsz={14} width={308} height={45} gap={5} label="Street Address" />
          </BoxItem>{" "}
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm fsz={14} width={308} height={45} gap={5} label="Area" />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm fsz={14} width={308} height={45} gap={5} label="Emirate" />
          </BoxItem>{" "}
        </div>
        <CardDetails />
        <Btn css="text-white text-[14px] font-lg w-full max-w-[133px] min-h-[49px] max-h-[49px] mt-[20px]">PAY</Btn>
        <div className="pb-[15px]"></div>
      </div>
    </div>
  );
};

export default Billing;
