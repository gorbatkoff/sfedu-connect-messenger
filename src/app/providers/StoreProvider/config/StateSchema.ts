import { CounterState } from "@/features/Counter";

import { UserSchema } from "@/entities/User";

export interface StateSchema {
  counter: CounterState;
  user: UserSchema;
}
