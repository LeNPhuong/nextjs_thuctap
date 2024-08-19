import React, { ReactNode } from "react";

const TitleForm: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <label className="text-12 text-left mb-[9px]" htmlFor="">
      {children}
    </label>
  );
};

export default TitleForm;
