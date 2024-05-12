import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User, UserSchema } from "@/entities/User";

const initialState: UserSchema = {
  authData: undefined,
  _mounted: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
      state.authData = action.payload;
      state._mounted = true;
    },
    removeAuthData: (state: UserSchema) => {
      state.authData = undefined;
      state._mounted = false;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
