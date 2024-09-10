import { Btn, InputForm, Title } from "@/app/component";
import BoxItem from "@/app/component/other/BoxItem";
import React, { SetStateAction, useState } from "react";
import CardDetails from "./CardDetails";
import { useAppSelector } from "@/app/redux/store";
import { payOrder } from "@/app/service/productApi";

const Billing: React.FC<{
  range: number;
  setRange: React.Dispatch<SetStateAction<number>>;
}> = () => {
  const cardData = useAppSelector((e) => e.cart.productList);

  const [firstName, setFistName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [emirate, setEmirate] = useState<string>("");

  async function pay() {
    if (cardData) {
      const data = {
        product: cardData[0].id,
        quantity: cardData[0].quantity,
        properties: ["Màu xanh", "L"],
      };
      const rq = await payOrder(data);
      console.log(rq);
    }
  }

  return (
    <div className="w-full font-v1">
      <div className="flexRow items-center w-full mb-[22px]">
        <input
          type="checkbox"
          className="mr-[10px] rounded-none min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]"
        />
        <label className="font-v1 text-14 font-md block">
          Same as Shipping Address
        </label>
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
            <InputForm
              initdata={firstName}
              set={setFistName}
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="First Name"
            />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              initdata={lastName}
              set={setLastName}
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Last Name"
            />
          </BoxItem>{" "}
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              initdata={address}
              set={setAddress}
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Street Address"
            />
          </BoxItem>{" "}
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              initdata={area}
              set={setArea}
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Area"
            />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              initdata={emirate}
              set={setEmirate}
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Emirate"
            />
          </BoxItem>{" "}
        </div>
        <CardDetails />
        <Btn
          event={pay}
          css="text-white text-[14px] font-lg w-full max-w-[133px] min-h-[49px] max-h-[49px] mt-[20px]"
        >
          PAY
        </Btn>
        <div className="pb-[15px]"></div>
      </div>
    </div>
  );
};

export default Billing;
