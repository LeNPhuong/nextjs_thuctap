import { Title } from "@/app/component";
import React from "react";

const Select: React.FC<{}> = ({}) => {
  return (
    <>
      <div className="mb-[40px]">
        <Title
          family="font-v1"
          fontSize="14"
          fontWeight={400}
          marginBottom="10"
        >
          Select Options
        </Title>
        <div className="flex flex-row flex-wrap gap-y-[20px]">
          {Array.from({ length: 15 }, (_, e) => (
            <div className="w-full max-w-[20%]">
              <div className="w-full flex flex-row items-center"></div>
              <input type="checkbox" className="mr-[15px]" />
              <label htmlFor="" className="text-14 font-md">
                Lorem Ipsem
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Select;
