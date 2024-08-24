import React from "react";
import FormLogin from "./FormLogin";

const Login: React.FC<{}> = () => {
  return (
    <div className="absolute top-[42px] translate-x-[-49%] shadow-custome2 z-[2000]">
      <div className="relative w-[311px] bg-[#fff]">
        <div className="w-[25px] h-[25px] bg-[#fff] absolute right-[130px] rotate-[-45deg] translate-y-[-50%] z-[-1]"></div>
        <h1 className="uppercase text-[17px] font-md pt-[31px] text-center">
          sign in
        </h1>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
