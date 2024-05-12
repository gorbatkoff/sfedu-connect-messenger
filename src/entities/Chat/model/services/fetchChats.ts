import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "@/app/providers/StoreProvider";

import { chatsActions } from "@/widgets/Chats/model/slice/chatSlice";

import { IChat } from "@/entities/Chat/model/types/chat";

interface IArg {
  userId: string;
}

export const fetchChats = createAsyncThunk<IChat[], IArg, ThunkConfig<string>>(
  "Chat/fetchChats",
  async ({ userId }, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      // generic of extra.api.get should be equal to return type
      const response = await extra.api.get<IChat[]>(`/chats/${userId}`);

      if (!response.data) throw new Error();

      return response.data;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);
