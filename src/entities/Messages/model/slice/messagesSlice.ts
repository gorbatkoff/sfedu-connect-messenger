import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IMessage } from "@/entities/Message/model/types/message";

import { MessagesSchema } from "../types/Messages";

const initialState: MessagesSchema = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messagesSlice",
  initialState,
  reducers: {
    setMessages: (state: MessagesSchema, action: PayloadAction<IMessage[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state: MessagesSchema, action: PayloadAction<IMessage>) => {
      state.messages.push(action.payload);
    },
  },
});

export const messagesActions = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
