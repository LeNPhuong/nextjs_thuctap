import React, { ReactNode } from "react";

const BoxContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="max-w-[1136px] mx-auto">{children}</div>;
};

export default BoxContent;
