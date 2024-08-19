import Link from "next/link";
import React, { ReactNode } from "react";

const Btn: React.FC<{ children: ReactNode; css: String }> = ({ children, css }) => {
  const style = "w-full bg-[#000]" + " " + css;
  return (
    <button className={style}>
      <Link href="">{children}</Link>
    </button>
  );
};

export default Btn;
