import React, { useRef } from "react";

const UploadImage = () => {
  const inputFile = useRef<HTMLInputElement>(null);

  function handleFile() {
    inputFile?.current?.click();
  }
  return (
    <>
      <p className="uppercase text-18 font-lg text-center mb-[12px]">
        Profile Picture
      </p>
      <div
        onClick={handleFile}
        className="w-full max-w-[153px] max-h-[153px] min-h-[153px] border-[1px] border-[#000] mx-auto cursor-pointer"
      >
        <p className="text-[80px] text-center leading-[153px]">+</p>
        <input className="hidden" type="file" ref={inputFile} />
      </div>
    </>
  );
};

export default UploadImage;
