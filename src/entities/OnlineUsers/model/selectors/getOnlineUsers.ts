import { StateSchema } from "@/app/providers/StoreProvider";

export const getOnlineUsers = (state: StateSchema) =>
  state.onlineUsers?.onlineUsers;
