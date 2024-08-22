"use client";

import { Breadcrumb, Btn, InputForm, Title } from "@/app/component";
import BoxItem from "@/app/component/other/BoxItem";
import BodyContainer from "@/app/layout/BodyContainer";
import React, { useRef } from "react";
import LoginWithService from "./LoginWithService";

const page = () => {
  const inputFile = useRef<HTMLInputElement>(null);

  function handleFile() {
    inputFile?.current?.click();
  }
  return (
    <>
      <BodyContainer>
        <Breadcrumb />
        <Title family="font-v2" fontSize="28" fontWeight={500}>
          REGISTRATION
        </Title>
        <div className="mb-[35px]"></div>
        <div className="w-full bg-[#fff] font-v1">
          <div className="pt-[45px]"></div>
          <LoginWithService />
          <p className="uppercase text-14 font-lg text-center my-[50px]">or</p>

          <p className="uppercase text-18 font-lg text-center mb-[12px]">Profile Picture</p>

          <div className="pb-[45px]">
            <div
              onClick={handleFile}
              className="w-full max-w-[153px] max-h-[153px] min-h-[153px] border-[1px] border-[#000] mx-auto cursor-pointer"
            >
              <p className="text-[80px] text-center leading-[153px]">+</p>
              <input className="hidden" type="file" ref={inputFile} />
            </div>
          </div>
          <Title fontSize="18" fontWeight={500} family="font-v1" marginBottom="15" marginLeft="215" marginRight="215">
            Personal Details
          </Title>
          <div className="px-[215px] flex flex-wrap gap-y-[22px] pb-[40px]">
            <BoxItem bg="none" width="50%" center={false}>
              <InputForm fsz={14} width={308} height={45} gap={5} label="First Name *" />
            </BoxItem>
            <BoxItem bg="none" width="50%" center={false}>
              <InputForm fsz={14} width={308} height={45} gap={5} label="Last Name *" />
            </BoxItem>
            <BoxItem bg="none" width="50%" center={false}>
              <InputForm fsz={14} width={308} height={45} gap={5} label="Email Address *" />
            </BoxItem>
            <BoxItem bg="none" width="50%" center={false}>
              <InputForm fsz={14} width={308} height={45} gap={5} label="Mobile Number *" />
            </BoxItem>
          </div>
          <Title fontSize="18" fontWeight={500} family="font-v1" marginBottom="15" marginLeft="215" marginRight="215">
            Address
          </Title>
          <div className="px-[215px] flex flex-wrap gap-y-[22px] pb-[40px]">
            <BoxItem bg="none" width="50%" center={false}>
              <InputForm fsz={14} width={308} height={45} gap={5} label="Street" />
            </BoxItem>
            <BoxItem bg="none" width="50%" center={false}>
              <InputForm fsz={14} width={308} height={45} gap={5} label="Area" />
            </BoxItem>
            <BoxItem bg="none" width="50%" center={false}>
              <InputForm fsz={14} width={308} height={45} gap={5} label="Emirate" />
            </BoxItem>
          </div>
          <Btn css="text-white w-full max-w-[145px] min-h-[49px] max-h-[49px] mx-auto">REGISTER</Btn>
          <div className="pb-[45px]"></div>
        </div>
        <div className="pb-[60px]"></div>
      </BodyContainer>
    </>
  );
};

export default page;
