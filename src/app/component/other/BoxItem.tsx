import React from "react";

const BoxItem: React.FC<{ children: React.ReactNode; center: boolean }> = ({ children, center }) => {
  return (
    <div
      style={{
        marginLeft: center ? "auto" : 0,
        marginRight: center ? "auto" : 0,
      }}
      className="w-full max-w-[262px] min-w-[262px] bg-[#fff] relative"
    >
      {children}
    </div>
  );
};

export default BoxItem;
