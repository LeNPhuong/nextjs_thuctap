"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type productType = {
  id: string;
  name: string;
  price: number;
  priceSale: number;
  img: string;
  quantity: number;
};

interface cart {
  productList: productType[] | undefined;
}

const localData = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data));
};

const initialState: cart = {
  productList: undefined,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartPersist: (state, action: PayloadAction<undefined | productType[]>) => {
      const data: undefined | productType[] = action.payload;
      if (data) {
        state.productList = data;
      } else {
        state.productList = undefined;
      }
    },
    addProduct: (state, action: PayloadAction<productType>) => {
      const data = action.payload;
      if (!state.productList) {
        state.productList = [];
        state.productList.push(data);
      } else {
        const productCheck = state.productList.some((e) => e.id == data.id);
        switch (productCheck) {
          case true:
            state.productList.map((e) =>
              e.id == data.id ? (e.quantity += 1) : e,
            );
            break;
          case false:
            state.productList.push(data);
            break;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.productList));
    },
    des: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      const productFind = state.productList?.find((e) => e.id == id);
      if (productFind && productFind?.quantity >= 2) {
        productFind.quantity -= 1;
      } else if (productFind && productFind.quantity == 1) {
        state.productList = state.productList?.filter((e) => e.id !== id);
        if (state.productList?.length == 0) {
          state.productList = undefined;
        }
      }
      // localStorage.setItem("cart", JSON.stringify(state.productList));
      localData("cart", state.productList);
    },
    add: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      const productFind = state.productList?.find((e) => e.id == id);
      if (productFind) {
        productFind.quantity += 1;
      }
      // localStorage.setItem("cart", JSON.stringify(state.productList));
      localData("cart", state.productList);
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const id: string = action.payload.id;
      if (state.productList) {
        state.productList = state.productList.filter((e) => e.id !== id);
        if (state.productList?.length == 0) {
          state.productList = undefined;
        }
      }
      // localStorage.setItem("cart", JSON.stringify(state.productList));
      localData("cart", state.productList);
    },
  },
});

export const { addProduct, add, des, remove, cartPersist } = cartSlice.actions;
export default cartSlice.reducer;
