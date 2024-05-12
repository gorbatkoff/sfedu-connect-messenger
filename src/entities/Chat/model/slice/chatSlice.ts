import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ChatSchema, IChat } from "@/entities/Chat/model/types/chat";

const initialState: ChatSchema = {
  chat: undefined,
  _selected: false,
};

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    setChat: (state: ChatSchema, action: PayloadAction<IChat>) => {
      state.chat = action.payload;
      state._selected = true;
    },
  },
});

export const chatActions = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
