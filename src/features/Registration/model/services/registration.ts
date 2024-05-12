import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "@/app/providers/StoreProvider";

import { User, userActions } from "@/entities/User";

import { USER_DATA_KEY } from "@/shared/const/localStorage";

import { RegistrationProps } from "../types/registration";

export const userRegistration = createAsyncThunk<
  User,
  RegistrationProps,
  ThunkConfig<string>
>("registration/userRegistration", async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<User>("/users/register", authData);
    if (!response.data) throw new Error();

    localStorage.setItem(USER_DATA_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Error");
  }
});
