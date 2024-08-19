import React from "react";

const BoxItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-full max-w-[262px] min-w-[262px] bg-[#fff] mx-auto">{children}</div>;
};

export default BoxItem;
