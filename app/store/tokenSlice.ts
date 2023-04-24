import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tokenInterface } from "../contracts/store";
import { RootState } from ".";

const initialState: tokenInterface = {
  token: "",
};

export const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export const selectToken = (state: RootState) => state.auth.token;
export default tokenSlice.reducer;
