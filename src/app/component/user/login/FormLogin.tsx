import React from "react";
import TitleForm from "./TitleForm";
import Link from "next/link";

import LoginService from "./LoginService";

const FormLogin: React.FC<{}> = () => {
  return (
    <div className="px-[20px]">
      <form action="">
        <div>
          <div className="flexCol mb-[20px]">
            <TitleForm>Username</TitleForm>
            <input
              className=" px-[12px] border-[1px] border-[#000] outline-none text-14 placeholder-rgb-custome-6 h-[50px]"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div className="flexCol">
            <TitleForm>Password</TitleForm>
            <input
              className=" px-[12px] border-[1px] border-[#000] outline-none text-14 placeholder-rgb-custome-6 h-[50px]"
              type="text"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <Link className="underline text-right text-12 my-[15px]" href="">
          Forgot Password?
        </Link>
        <div className="flexRowV4">
          <button
            type="submit"
            className="text-16 font-lg bg-[#000] h-[49px] max-w-[145px] w-full text-white mb-[29px] text-center"
          >
            SIGN IN
          </button>
        </div>
      </form>
      <LoginService />
    </div>
  );
};

export default FormLogin;
