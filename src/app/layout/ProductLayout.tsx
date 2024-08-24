"use client";

import React, { ReactNode } from "react";

const ProductLayout: React.FC<{
  children: ReactNode;
  bg?: string;
  top?: string;
  bottom?: string;
}> = ({ children, bg, top, bottom }) => {
  return (
    <div
      style={{
        background: bg ? bg : "none",
        paddingTop: top ? top + "px" : "0px",
        paddingBottom: bottom ? bottom + "px" : "0px",
      }}
      className="flexRow flex-wrap w-full gap-[30px]"
    >
      {children}
    </div>
  );
};

export default ProductLayout;
