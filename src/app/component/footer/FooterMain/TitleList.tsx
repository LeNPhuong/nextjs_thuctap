import React, { ReactNode } from "react";

const TitleList: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <h2 className="text-[20px] font-md mb-[36px]">{children}</h2>;
};

export default TitleList;
