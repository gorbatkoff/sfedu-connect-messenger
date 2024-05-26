export interface IOnlineUser {
  userId: string;
  socketId: string;
}

export interface OnlineUsersSchema {
  onlineUsers: IOnlineUser[];
}
