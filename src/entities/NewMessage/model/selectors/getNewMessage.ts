import { StateSchema } from "@/app/providers/StoreProvider";

export const getNewMessage = (state: StateSchema) =>
  state.newMessage.newMessage;
