"use client";

import React, { useState } from "react";
import Link from "next/link";

import LoginService from "./LoginService";
import InputForm from "../../other/InputForm";
import Btn from "../../other/Btn";
import { loginUser } from "@/app/service/auth";
import { useAppDispatch } from "@/app/redux/store";
import { getDataUser } from "@/app/redux/slice/authSlice";

const FormLogin: React.FC<{}> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  async function login(event: Event) {
    event.preventDefault();
    try {
      if (username.length === 0) {
        throw new Error("Vui lòng nhập tài khoản");
      } else if (password.length === 0) {
        throw new Error("Vui lòng nhập mật khẩu");
      }

      const rq = await loginUser(username, password);
      dispatch(getDataUser(rq));
      localStorage.setItem("access_token", JSON.stringify(rq.accessToken));
    } catch (error: any) {
      return alert(error.message);
    }
  }

  return (
    <div className="px-[20px]">
      <form action="">
        <div>
          <InputForm
            fsz={14}
            width={308}
            height={45}
            gap={5}
            label="Họ tên"
            initdata={username}
            set={setUsername}
          />
          <InputForm
            fsz={14}
            width={308}
            height={45}
            gap={5}
            label="Mật khẩu"
            initdata={password}
            set={setPassword}
            type="password"
          />
        </div>
        <Link className="underline text-right text-12 my-[15px]" href="">
          Forgot Password?
        </Link>
        <div className="flexRowV4">
          <Btn
            event={(e: Event) => login(e)}
            css="text-16 font-lg bg-[#000] h-[49px] max-w-[145px] w-full text-white mb-[29px] text-center"
          >
            LOGIN
          </Btn>
        </div>
      </form>
      <LoginService />
    </div>
  );
};

export default FormLogin;
