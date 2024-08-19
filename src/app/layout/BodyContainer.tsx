"use client";

import { ReactNode, FC } from "react";

const BodyContainer: FC<{ children: ReactNode; color: string }> = ({ children, color }) => {
  return (
    <div
      style={{
        background: color,
      }}
      className="w-full"
    >
      <div className="max-w-[1144px] mx-auto">{children}</div>
    </div>
  );
};

export default BodyContainer;
