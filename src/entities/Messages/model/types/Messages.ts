import { IMessage } from "@/entities/Message/model/types/message";

export type TMessages = IMessage[];

export interface MessagesSchema {
  messages: TMessages;
}
