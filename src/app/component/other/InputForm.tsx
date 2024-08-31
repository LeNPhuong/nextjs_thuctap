import React, { SetStateAction } from "react";

const InputForm: React.FC<{
  initdata: string | number;
  set: React.Dispatch<SetStateAction<string>>;
  labelOn?: boolean;
  label?: string;
  mb?: number;
  width?: number;
  height: number;
  gap?: number;
  fsz?: number;
  placeHolder?: string;
  type?: string;
}> = ({
  initdata,
  set,
  label,
  mb,
  width,
  height,
  gap,
  fsz,
  placeHolder = label,
  labelOn = true,
  type = "text",
}) => {
  return (
    <div
      style={{
        marginBottom: mb ? mb + "px" : 0,
        gap: gap ? gap + "px" : "0",
        fontSize: fsz ? fsz + "px" : "auto",
      }}
      className="flexCol"
    >
      {labelOn && (
        <label className="text-14 font-md" htmlFor="">
          {label}
        </label>
      )}

      <input
        style={{
          maxWidth: width ? width + "px" : "100%",
          minHeight: height ? height + "px" : "100%",
          maxHeight: height ? height + "px" : "100%",
        }}
        className="border-[1px] border-black outline-none w-full px-[10px]"
        type={type}
        placeholder={placeHolder}
        value={initdata}
        onChange={(e) => set(e.target.value)}
      />
    </div>
  );
};

export default InputForm;
