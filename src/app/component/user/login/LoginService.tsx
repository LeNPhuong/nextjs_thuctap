import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";

const LoginService: React.FC<{}> = () => {
  return (
    <div>
      <p className="uppercase text-14 text-center mb-[13px]">or</p>

      <Link
        href=""
        className="w-full max-w-[187px] h-[46px] border-[1px] border-rgb-custome-3 pl-[35px] flexRowV2 mx-auto mb-[17px]"
      >
        <span className="text-18 mr-[13px]">
          <FaFacebookSquare />
        </span>
        <span className="text-14">Login with Facebook</span>
      </Link>

      <Link
        href=""
        className="w-full max-w-[187px] h-[46px] border-[1px] border-rgb-custome-3 pl-[35px] flexRowV2 mx-auto mb-[55px]"
      >
        <span className="text-18 mr-[13px]">
          <FaSquareGooglePlus />
        </span>
        <span className="text-14">Login with Google +</span>
      </Link>
      <Link className="text-16 text-center pb-[31px]" href="">
        New Member? Register Now
      </Link>
    </div>
  );
};

export default LoginService;
