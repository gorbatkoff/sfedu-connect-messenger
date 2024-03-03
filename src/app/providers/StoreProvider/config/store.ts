import { configureStore } from "@reduxjs/toolkit";

import { ThunkExtraArg } from "@/app/providers/StoreProvider";

import { counterReducer } from "@/features/Counter";

import { userReducer } from "@/entities/User";

import { apiInstance } from "@/shared/api";

const extraArg: ThunkExtraArg = {
  api: apiInstance,
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
