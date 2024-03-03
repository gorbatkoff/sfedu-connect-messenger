import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "@/app/providers/StoreProvider";

import { User, userActions } from "@/entities/User";

interface UserLoginProps {
  username: string;
  password: string;
}

export const userLoginService = createAsyncThunk<
  User,
  UserLoginProps,
  ThunkConfig<string>
>("authorization/login", async (authData, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI;

  try {
    console.log(authData);

    const response = await extra.api.post<User>("/login", authData);
    if (!response.data) throw new Error();

    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});
