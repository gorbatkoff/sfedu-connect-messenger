import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  IOnlineUser,
  OnlineUsersSchema,
} from "@/entities/OnlineUsers/model/types/OnlineUsers";

const initialState: OnlineUsersSchema = {
  onlineUsers: [],
};

export const onlineUsersSlice = createSlice({
  name: "onlineUsersSlice",
  initialState,
  reducers: {
    setOnlineUsers: (
      state: OnlineUsersSchema,
      action: PayloadAction<IOnlineUser[]>
    ) => {
      state.onlineUsers = action.payload;
    },
  },
});

export const onlineUsersActions = onlineUsersSlice.actions;
export const onlineUsersReducer = onlineUsersSlice.reducer;
