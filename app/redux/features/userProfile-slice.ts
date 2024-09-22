import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userProfileState = {
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
};

type initalStateType = {
  value: userProfileState;
};

const initialState: initalStateType = {
  value: {
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
  },
};

export const userProfile = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<userProfileState>) => {
      state.value = action.payload;
    },
    clearUserInfo: (state) => {
      state.value = { firstName: "", lastName: "", email: "", imageUrl: "" }; // Reset to empty
    },
  },
});

export const { setUserInfo, clearUserInfo } = userProfile.actions;
export default userProfile.reducer;
