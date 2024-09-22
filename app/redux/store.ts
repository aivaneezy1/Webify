/*
Hold all the variable states of our project
*/
import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "./features/userProfile-slice";

import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
  // responsible for determining how the state of the application changes in response to an action
  reducer: {
    userProfile: userProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
