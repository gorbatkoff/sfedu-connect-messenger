import { configureStore } from "@reduxjs/toolkit";

import { ThunkExtraArg } from "@/app/providers/StoreProvider";

import { chatsReducer } from "@/widgets/Chats/model/slice/chatSlice";

import { counterReducer } from "@/features/Counter";

import { chatReducer } from "@/entities/Chat/model/slice/chatSlice";
import { messagesReducer } from "@/entities/Messages/model/slice/messagesSlice";
import { newMessageReducer } from "@/entities/NewMessage";
import { onlineUsersReducer } from "@/entities/OnlineUsers";
import { userReducer } from "@/entities/User";

import { apiInstance } from "@/shared/api";
import { rtkApi } from "@/shared/api/rtkApi";

const extraArg: ThunkExtraArg = {
  api: apiInstance,
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    onlineUsers: onlineUsersReducer,
    newMessage: newMessageReducer,
    messages: messagesReducer,
    chats: chatsReducer,
    chat: chatReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }).concat(rtkApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
