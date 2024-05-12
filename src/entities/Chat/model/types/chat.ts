export interface IChat {
  createdAt: string;
  members: string[];
  updatedAt: string;
  __v: unknown;
  _id: string;
}

export interface ChatSchema {
  chat?: IChat;
  _selected: boolean;
}
