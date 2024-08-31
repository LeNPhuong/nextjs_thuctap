import React, { ReactNode } from "react";

const Btn: React.FC<{ children: ReactNode; css: String; event?: any }> = ({
  children,
  css,
  event,
}) => {
  const style = "w-full bg-[#000]" + " " + css;
  return (
    <button onClick={event} className={style}>
      {children}
    </button>
  );
};

export default Btn;
