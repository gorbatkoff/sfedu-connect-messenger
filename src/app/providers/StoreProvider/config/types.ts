import { Dispatch } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

import { StateSchema } from "./StateSchema";

// Declaration of "extra", means extra have api field => AxiosInstance
export interface ThunkExtraArg {
  api: AxiosInstance;
}

// Declaration of thunk config
export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch?: Dispatch;
  state: StateSchema;
}
