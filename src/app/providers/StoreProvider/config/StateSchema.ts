import { IChats } from "@/widgets/Chats/model/types/chats";

import { CounterState } from "@/features/Counter";

import { ChatSchema } from "@/entities/Chat";
import { MessagesSchema } from "@/entities/Messages/model/types/Messages";
import { NewMessageSchema } from "@/entities/NewMessage/model/types/NewMessage";
import { OnlineUsersSchema } from "@/entities/OnlineUsers";
import { UserSchema } from "@/entities/User";

import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
  counter: CounterState;
  user: UserSchema;
  onlineUsers: OnlineUsersSchema;
  newMessage: NewMessageSchema;
  messages: MessagesSchema;
  chats: IChats;
  chat: ChatSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
