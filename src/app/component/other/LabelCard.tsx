import React from "react";

const LabelCard: React.FC<{}> = () => {
  return (
    <>
      <div className="text-[13px] text-center leading-[25px] uppercase font-v1 text-white absolute top-[10px] left-[-5px] min-w-[60px] min-h-[25px] max-w-[60px] max-h-[25px] bg-black z-[11]">
        new
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%)",
        }}
        className="absolute top-[35px] left-[-5px] min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] bg-rgb-custome-10 z-[1]"
      ></div>
    </>
  );
};

export default LabelCard;
