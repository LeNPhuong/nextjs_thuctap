import React, { ReactNode } from "react";

const layout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <>{children}</>;
};

export default layout;
