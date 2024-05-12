import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchChats } from "@/entities/Chat/model/services/fetchChats";
import { IChat } from "@/entities/Chat/model/types/chat";

import { IChats } from "../types/chats";

const initialState: IChats = {
  chats: [],
};

export const chatsSlice = createSlice({
  name: "chatsSlice",
  initialState,
  reducers: {
    setChats: (state: IChats, action: PayloadAction<IChat[]>) => {
      state.chats = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.chats = action.payload;
    });
  },
});

export const chatsActions = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
