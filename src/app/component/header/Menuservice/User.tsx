"use client";

import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Login from "../../user/login/Login";

const User: React.FC<{}> = () => {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <div className="border-r-[1px] text-black border-[#000] max-h-[26px] pr-[23px] relative">
      <button onClick={() => setLogin((e) => !e)} className="flexRowV2 gap-[13px]">
        <span className="text-16 font-md">User</span>
        <span className="text-24">
          <FaRegUserCircle />
        </span>
      </button>
      {login && <Login />}
    </div>
  );
};

export default User;
