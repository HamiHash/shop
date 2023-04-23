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
  },
});

export const { setToken } = tokenSlice.actions;
export const selectToken = (state: RootState) => state.auth.token;
export default tokenSlice.reducer;
