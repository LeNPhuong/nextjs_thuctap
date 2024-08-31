import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface user {
  id: string;
  name: number;
  email: string;
  phone: string;
  birthday: string;
  address: string;
  gender: string;
  enableNotification: boolean;
  status: string;
  roleTitle: string;
  step: number;
  childrens: [];
  accessToken: string;
}

interface init {
  dataUser: user | null;
}

const initialState: init = {
  dataUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getDataUser: (state, action: PayloadAction<user>) => {
      console.log(action.payload);

      state.dataUser = action.payload;
    },
  },
});

export const { getDataUser } = userSlice.actions;

export default userSlice.reducer;
