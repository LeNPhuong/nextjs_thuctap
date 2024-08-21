import Link from "next/link";
import React, { ReactNode } from "react";

const UserService: React.FC<{
  icon: ReactNode;
  title: string;
  refLink: string;
}> = ({ icon, title, refLink }) => {
  return (
    <Link
      href={refLink}
      className="w-full max-w-[190px] h-[46px] border-[1px] border-rgb-custome-3 flexRowV4 items-center mb-[17px]"
    >
      <span className="text-18 mr-[13px]">{icon}</span>
      <span className="text-14">{title}</span>
    </Link>
  );
};

export default UserService;
