"use client";

import { Breadcrumb, Btn, InputForm, Title } from "@/app/component";
import React, { useState } from "react";
import LoginWithService from "./LoginWithService";
import BoxItem from "@/app/component/other/BoxItem";
import { checkemailphone, registerUser } from "@/app/service/auth";
import SendEmail from "./SendEmail";

const UserPage = () => {
  const [nextSend, setNextSend] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [again, setAgain] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const [address, setAddress] = useState<string>("");

  async function checkEmail() {
    const data = {
      username: username,
      email: email,
      password: pass,
      phone: phone,
      day: day,
      month: month,
      year: year,
      address: address,
      gender: gender,
    };

    let datacheck = Object.keys(data);

    for (let i = 0; i < datacheck.length - 1; i++) {
      if (data[datacheck[i] as keyof typeof data].length === 0) {
        alert("Vui lòng nhập " + datacheck[i]);
        break;
      }
    }

    if (pass !== again) {
      return alert("Mật khẩu nhập lại không khớp");
    }

    const callrq: boolean = await checkemailphone(email, phone);
    setNextSend(callrq);
  }

  async function register(otp: string) {
    const data = {
      name: username,
      email: email,
      password: pass,
      phone: phone,
      birthday: day + "-" + month + "-" + year,
      address: address,
      gender: gender,
      otp: otp,
    };

    const register = await registerUser(data);
  }

  return (
    <>
      <Breadcrumb />
      <Title family="font-v2" fontSize="28" fontWeight={500}>
        REGISTRATION
      </Title>
      <div className="mb-[35px]"></div>
      <div className="w-full bg-[#fff] font-v1">
        <div className="pt-[45px]"></div>
        <LoginWithService />
        <p className="uppercase text-14 font-lg text-center my-[50px]">or</p>

        <Title
          fontSize="18"
          fontWeight={500}
          family="font-v1"
          marginBottom="15"
          marginLeft="215"
          marginRight="215"
        >
          Personal Details
        </Title>
        <div className="px-[215px] flex flex-col items-center gap-y-[22px] pb-[40px]">
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Họ tên"
              set={setUsername}
              initdata={username}
            />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Email"
              initdata={email}
              set={setEmail}
            />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Số điện thoại"
              set={setPhone}
              initdata={phone}
            />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Mật khẩu"
              set={setPass}
              initdata={pass}
            />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Xác nhận Mật khẩu"
              set={setAgain}
              initdata={again}
            />
          </BoxItem>
          <div className="w-[50%] flex flex-row gap-[19px] mt-[10px]">
            <BoxItem bg="none" width="25%" center={false}>
              <InputForm
                fsz={14}
                width={308 / 3}
                height={45}
                gap={5}
                labelOn={false}
                label="DD"
                set={setDay}
                initdata={day}
              />
            </BoxItem>{" "}
            <BoxItem bg="none" width="25%" center={false}>
              <InputForm
                fsz={14}
                width={308 / 3}
                height={45}
                gap={5}
                labelOn={false}
                label="MM"
                set={setMonth}
                initdata={month}
              />
            </BoxItem>{" "}
            <BoxItem bg="none" width="25%" center={false}>
              <InputForm
                fsz={14}
                width={308 / 3}
                height={45}
                gap={5}
                labelOn={false}
                label="YYYY"
                set={setYear}
                initdata={year}
              />
            </BoxItem>{" "}
          </div>
          <BoxItem bg="none" width="50%" center={false}>
            <InputForm
              fsz={14}
              width={308}
              height={45}
              gap={5}
              label="Địa chỉ"
              set={setAddress}
              initdata={address}
            />
          </BoxItem>
          <BoxItem bg="none" width="50%" center={false}>
            <label className="text-14 font-md mb-[5px] block" htmlFor="">
              Giới tính
            </label>
            <select
              name=""
              id=""
              className="border-[1px] border-black outline-none w-full px-[10px] max-w-[308px]"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Nam">Nam</option>
              <option value="Nu">Nữ</option>
            </select>
          </BoxItem>
        </div>

        <Btn
          event={checkEmail}
          css="text-white w-full max-w-[145px] min-h-[49px] max-h-[49px] mx-auto"
        >
          REGISTER
        </Btn>
        {nextSend && <SendEmail register={register} />}
        <div className="pb-[45px]"></div>
      </div>
    </>
  );
};

export default UserPage;
