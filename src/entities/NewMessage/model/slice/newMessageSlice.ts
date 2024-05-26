import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IMessage } from "@/entities/Message/model/types/message";

import { NewMessageSchema } from "../types/NewMessage";

const initialState: NewMessageSchema = {
  newMessage: null,
};

export const newMessageSlice = createSlice({
  name: "newMessageSlice",
  initialState,
  reducers: {
    setNewMessage: (
      state: NewMessageSchema,
      action: PayloadAction<IMessage>
    ) => {
      state.newMessage = action.payload;
    },
  },
});

export const newMessageActions = newMessageSlice.actions;
export const newMessageReducer = newMessageSlice.reducer;
