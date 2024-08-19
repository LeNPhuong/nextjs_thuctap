import Link from "next/link";
import React, { ReactNode } from "react";

const BtnMore: React.FC<{ children: ReactNode; refLink: String }> = ({
  children,
  refLink,
}) => {
  return (
    <Link
      className="font-v1 text-16 font-lg underline uppercase"
      href={`${refLink}`}
    >
      {children}
    </Link>
  );
};

export default BtnMore;
