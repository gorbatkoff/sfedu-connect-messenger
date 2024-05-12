import { IChats } from "@/widgets/Chats/model/types/chats";

import { CounterState } from "@/features/Counter";

import { ChatSchema } from "@/entities/Chat/model/types/chat";
import { UserSchema } from "@/entities/User";

export interface StateSchema {
  counter: CounterState;
  user: UserSchema;
  chats: IChats;
  chat: ChatSchema;
}
