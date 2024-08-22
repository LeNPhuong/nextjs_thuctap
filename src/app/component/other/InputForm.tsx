import React, { SetStateAction } from "react";

const InputForm: React.FC<{
  initdata?: string | number;
  set?: React.Dispatch<SetStateAction<string | number>>;
  labelOn?: boolean;
  label?: string;
  mb?: number;
  width?: number;
  height: number;
  gap: number;
  fsz: number;
}> = ({ initdata, set, label, mb, width, height, gap, fsz, labelOn = true }) => {
  return (
    <div
      style={{
        marginBottom: mb ? mb + "px" : 0,
        gap: gap ? gap + "px" : "0",
        fontSize: fsz ? fsz + "px" : "auto",
      }}
      className="flexCol"
    >
      {labelOn && <label className="text-14 font-md" htmlFor="">{label}</label>}

      <input
        style={{
          maxWidth: width ? width + "px" : "100%",
          minHeight: height ? height + "px" : "100%",
          maxHeight: height ? height + "px" : "100%",
        }}
        className="border-[1px] border-black outline-none w-full px-[10px]"
        type="text"
        placeholder={label}
      />
    </div>
  );
};

export default InputForm;
