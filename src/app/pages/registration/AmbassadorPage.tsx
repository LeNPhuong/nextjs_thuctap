import { Btn, InputForm, Title } from "@/app/component";
import React, { useState } from "react";
import UploadImage from "./UploadImage";
import BoxItem from "@/app/component/other/BoxItem";
import BoxGender from "./BoxGender";

const AmbassadorPage = () => {
  const [demo, setDemo] = useState<string>("");

  return (
    <>
      <div className="pb-[35px]"></div>
      <div className="pt-[62px] pb-[55px] px-[245px] bg-white font-v1">
        <div className="flexCol items-center">
          <Title
            family="font-v1"
            fontSize="25"
            fontWeight={400}
            marginBottom="80"
          >
            Welcome NAME SURNAME
          </Title>
          <p className="font-md text-18 mb-[55px]">
            Please fill in the complete details in the form below
          </p>
          <UploadImage />
        </div>
        <Title
          fontSize="18"
          fontWeight={500}
          family="font-v1"
          marginTop="40"
          marginBottom="20"
        >
          Personal Details
        </Title>
        <div className="w-full flexRow flex-wrap gap-y-[20px]">
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="First Name *"
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
              label="Last Name *"
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
              label="Display Name"
              initdata={demo}
              set={setDemo}
            />
          </BoxItem>
          <BoxGender />
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Email Address"
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
              label="Mobile Number"
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
              label="Instagram"
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
              label="Youtube"
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
              label="Set Password"
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
              label="Repeat Password"
              initdata={demo}
              set={setDemo}
            />
          </BoxItem>
        </div>
        <div className="flexRow items-center w-full mt-[30px]">
          <input
            type="checkbox"
            className="mr-[10px] rounded-none min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]"
          />
          <label className="font-v1 text-14 font-md">
            I agree to the{" "}
            <span className="inline-block underline">Terms & Conditions</span>
          </label>
        </div>
        <Btn css="text-white w-full max-w-[145px] min-h-[49px] max-h-[49px] mx-auto mt-[40px]">
          REGISTER
        </Btn>
      </div>
    </>
  );
};

export default AmbassadorPage;
