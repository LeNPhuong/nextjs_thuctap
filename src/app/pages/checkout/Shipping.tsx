import { Btn, InputForm, Title } from "@/app/component";
import BoxItem from "@/app/component/other/BoxItem";
import React, { SetStateAction, useState } from "react";

const Shipping: React.FC<{
  range: number;
  setRange: React.Dispatch<SetStateAction<number>>;
}> = ({ range, setRange }) => {
  const [demo, setDemo] = useState<string>("");
  return (
    <div className="w-full font-v1">
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
        <div className="w-full flex flex-row flex-wrap gap-y-[22px]">
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="First Name"
              initdata={demo}
              set={setDemo}
            />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Last Name"
              initdata={demo}
              set={setDemo}
            />
          </BoxItem>{" "}
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Street Address"
              initdata={demo}
              set={setDemo}
            />
          </BoxItem>{" "}
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Area"
              initdata={demo}
              set={setDemo}
            />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="City"
              initdata={demo}
              set={setDemo}
            />
          </BoxItem>{" "}
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Phone Number"
              initdata={demo}
              set={setDemo}
            />
          </BoxItem>
        </div>
        <div className="pb-[15px]"></div>
        <Title family="font-v1" fontSize="14" fontWeight={400} marginBottom="5">
          Delivery Instructions
        </Title>
        <textarea className="w-full max-w-[308px] outline-none border-[1px] border-[#000] min-h-[135px] max-h-[135px]" />
        <p className="text-14 mt-[15px]">
          Molestias fringilla aliquam curae, taciti, vestibulum potenti sapien,
          tellus voluptatibus aliquid sapien. Nisi su aliquid sapien
        </p>
        <Btn
          event={() => setRange(100)}
          css="text-white text-[14px] font-lg w-full max-w-[133px] min-h-[49px] max-h-[49px] mt-[45px]"
        >
          CONTINUE
        </Btn>
      </div>
    </div>
  );
};

export default Shipping;
