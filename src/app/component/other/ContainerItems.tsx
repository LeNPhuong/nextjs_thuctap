import React, { ReactNode } from "react";

const ContainerItems: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="min-w-[25%] w-full max-w-[25%] mx-auto">{children}</div>;
};

export default ContainerItems;
