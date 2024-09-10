"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import userSlc from "./slice/authSlice";
import cartSlc from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    user: userSlc,
    cart: cartSlc,
  },
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();
