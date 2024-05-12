import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "@/app/providers/StoreProvider";

import { User, userActions } from "@/entities/User";

import { USER_DATA_KEY, USER_TOKEN_KEY } from "@/shared/const/localStorage";

import { AuthorizationProps } from "../types/authorization";

export const userAuthorization = createAsyncThunk<
  User,
  AuthorizationProps,
  ThunkConfig<string>
>("authorization/userAuthorization", async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<User>("/users/login", authData);
    if (!response.data) throw new Error();

    localStorage.setItem(USER_DATA_KEY, JSON.stringify(response.data));
    localStorage.setItem(USER_TOKEN_KEY, JSON.stringify(response.data.token));
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Error");
  }
});
