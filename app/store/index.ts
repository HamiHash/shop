import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import userDataReducer from "./userDataSlice";

export const store = configureStore({
  reducer: { auth: tokenReducer, userData: userDataReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
