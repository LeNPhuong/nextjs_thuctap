"use client";

import { Breadcrumb, Btn, InputForm, Title } from "@/app/component";
import BoxItem from "@/app/component/other/BoxItem";
import BodyContainer from "@/app/layout/BodyContainer";
import { NextPage } from "next";
import React, { useRef } from "react";
import Select from "./Select";

const page: NextPage<{}> = () => {
  const inputFile = useRef<HTMLInputElement>(null);
  function handleFile() {
    inputFile?.current?.click();
  }
  return (
    <>
      <BodyContainer>
        <Breadcrumb />
        <Title
          family="font-v2"
          fontSize="28"
          fontWeight={500}
          marginBottom="40"
        >
          ADD REVIEW
        </Title>
        <div className="bg-white pt-[50px] px-[220px] font-v1">
          <Title
            family="font-v1"
            fontSize="22"
            fontWeight={500}
            marginBottom="30"
          >
            Add Review
          </Title>
          <div className="flex flex-row font-v1 mb-[28px]">
            <BoxItem bg="none" width="50%" center={false}>
              <InputForm
                fsz={14}
                width={308}
                height={45}
                gap={5}
                label="Select Brand"
              />
            </BoxItem>
            <BoxItem bg="none" width="50%" center={false}>
              <InputForm
                fsz={14}
                width={308}
                height={45}
                gap={5}
                label="Select Product"
              />
            </BoxItem>
          </div>
          <Title
            family="font-v1"
            fontSize="18"
            fontWeight={400}
            marginBottom="15"
          >
            You have selected “Product Name”
          </Title>
          <div className="flex flex-col w-full mb-[15px]">
            <label htmlFor="" className="text-14 font-md mb-[5px]">
              Upload Image
            </label>
            <input type="file" className="hidden" ref={inputFile} />
            <div className="w-full max-w-[308px] min-h-[40px] max-h-[40px] flex flex-row justify-between items-center px-[10px] border-[1px] border-[#000]">
              <p className="text-14 font-md text-rgb-custome-6">
                Choose an image
              </p>
              <button
                onClick={handleFile}
                className="text-14 text-black w-full max-w-[84px] min-h-[22px] max-h-[22px] bg-rgb-custome-5 rounded-full"
              >
                Choose
              </button>
            </div>
          </div>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Video URL"
            />
          </BoxItem>
          <div className="mb-[15px]"></div>
          <div className="flex flex-col w-full mb-[23px]">
            <label htmlFor="" className="text-14 font-md mb-[5px]">
              Summary
            </label>
            <textarea className="w-full border-[1px] border-[#000] outline-none min-h-[105px] max-h-[105px] p-[10px]" />
          </div>
          <Select />
          <div className="flex flex-row justify-center pb-[65px]">
            <Btn css="max-w-[145px] min-h-[49px] max-h-[49px] text-white">
              SUBMIT
            </Btn>
          </div>
        </div>
        <div className="pb-[345px]"></div>
      </BodyContainer>
    </>
  );
};

export default page;
