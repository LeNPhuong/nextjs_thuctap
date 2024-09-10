"use client";

import React, { useEffect } from "react";
import BoxService from "./Menuservice/BoxService";
import BoxMenu from "./MenuList/BoxMenu";
import { useAppDispatch } from "@/app/redux/store";
import { cartPersist } from "@/app/redux/slice/cartSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")!)
      ? JSON.parse(localStorage.getItem("cart")!)
      : undefined;
    dispatch(cartPersist(data));
  }, [dispatch]);
  return (
    <header className="max-h-[143px] font-v1">
      <div className="w-full h-full">
        <BoxService />
        <BoxMenu />
      </div>
    </header>
  );
};

export default Header;
