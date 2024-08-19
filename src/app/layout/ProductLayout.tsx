"use client";

import React, { ReactNode } from "react";

const ProductLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flexRowV3 flex-wrap w-full gap-[30px]">{children}</div>
  );
};

export default ProductLayout;
