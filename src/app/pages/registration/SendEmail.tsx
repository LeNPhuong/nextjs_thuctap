import { Btn, Title } from "@/app/component";
import React, { useRef } from "react";

const SendEmail: React.FC<{ register: (otp: string) => {} }> = ({
  register,
}) => {
  const refParent = useRef<HTMLDivElement>(null);

  async function checkthu(): Promise<any> {
    let otpdata: string = "";
    (refParent.current?.childNodes as NodeListOf<HTMLInputElement>).forEach(
      (e) => {
        console.log(e.value);
        otpdata += e.value;
      },
    );

    const data = await register(otpdata);
    return data;
  }

  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 bg-[#00000081]">
      <div className="mt-[100px] bg-[#fff] max-w-[500px] mx-auto py-[20px] rounded-[5px]">
        <div className="flex flex-row justify-center">
          <Title
            fontSize="18"
            fontWeight={500}
            family="font-v1"
            marginBottom="15"
          >
            Nhập mã xác thực
          </Title>
        </div>
        <div
          className="flex flex-row justify-center w-full gap-[10px]"
          ref={refParent}
        >
          <input
            maxLength={1}
            className="text-center p-[4px] outline-none border-[1px] border-[#000] max-w-[40px] min-h-[40px] max-h-[40px] rounded-[4px]"
            type="text"
            name=""
            id=""
          />
          <input
            maxLength={1}
            className="text-center p-[4px] outline-none border-[1px] border-[#000] max-w-[40px] min-h-[40px] max-h-[40px] rounded-[4px]"
            type="text"
            name=""
            id=""
          />
          <input
            maxLength={1}
            className="text-center p-[4px] outline-none border-[1px] border-[#000] max-w-[40px] min-h-[40px] max-h-[40px] rounded-[4px]"
            type="text"
            name=""
            id=""
          />
          <input
            maxLength={1}
            className="text-center p-[4px] outline-none border-[1px] border-[#000] max-w-[40px] min-h-[40px] max-h-[40px] rounded-[4px]"
            type="text"
            name=""
            id=""
          />
          <input
            maxLength={1}
            className="text-center p-[4px] outline-none border-[1px] border-[#000] max-w-[40px] min-h-[40px] max-h-[40px] rounded-[4px]"
            type="text"
            name=""
            id=""
          />
          <input
            maxLength={1}
            className="text-center p-[4px] outline-none border-[1px] border-[#000] max-w-[40px] min-h-[40px] max-h-[40px] rounded-[4px]"
            type="text"
            name=""
            id=""
          />
        </div>
        <Btn
          event={checkthu}
          css="text-white w-full max-w-[145px] min-h-[49px] max-h-[49px] mx-auto mt-[50px]"
        >
          Xác nhận
        </Btn>
      </div>
    </div>
  );
};

export default SendEmail;
