import React from "react";
import Btn from "../../other/Btn";

const BtnSub: React.FC<{}> = () => {
  return (
    <div>
      <div className="w-full h-[50px] max-w-[380px] border-[1px] border-rgb-custome-3 flexRow">
        <input
          className="w-full max-w-[250px] h-full outline-none px-[16px]"
          type="text"
          placeholder="Enter Email Address"
          name=""
          id=""
        />
        <Btn css="bg-rgb-custome-3 h-full flex-[1_0_0] text-white">SUBSCRIBE</Btn>
      </div>
    </div>
  );
};

export default BtnSub;
