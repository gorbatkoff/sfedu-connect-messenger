import { IMessage } from "@/entities/Message/model/types/message";

export interface NewMessageSchema {
  newMessage: IMessage | null;
}
