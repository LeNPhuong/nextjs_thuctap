import React, { ReactNode } from "react";

const ContentLayoutV2: React.FC<{ children: ReactNode; width?: string }> = ({
  children,
  width,
}) => {
  return (
    <div
      style={{ maxWidth: width ? width : "100%" }}
      className="bg-white p-[33px_30px] font-v1 w-full"
    >
      {children}
    </div>
  );
};

export default ContentLayoutV2;
