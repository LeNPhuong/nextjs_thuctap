import React from "react";

const BoxItem: React.FC<{ children: React.ReactNode; center: boolean; width: string; bg?: string }> = ({
  children,
  center,
  width,
  bg,
}) => {
  return (
    <div
      style={{
        marginLeft: center ? "auto" : 0,
        marginRight: center ? "auto" : 0,
        maxWidth: width,
        minWidth: width,
        background: bg ? bg : "#fff",
      }}
      className="w-full bg-[#fff] relative"
    >
      {children}
    </div>
  );
};

export default BoxItem;
