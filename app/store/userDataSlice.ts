import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInterface } from "../contracts/store";
import { RootState } from ".";

const initialState: userInterface = {
  id: 0,
  name: "",
};

export const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<userInterface>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { updateUser } = userData.actions;
export const selectUser = (state: RootState) => state.userData;
export default userData.reducer;
