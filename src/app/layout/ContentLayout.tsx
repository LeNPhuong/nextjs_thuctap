"use client";

import React, { ReactNode } from "react";

const ContentLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-full py-[55px]">{children}</div>;
};

export default ContentLayout;
