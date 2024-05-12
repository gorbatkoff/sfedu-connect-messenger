export interface User {
  _id: string;
  email: string;
  username: string;
  age: number;
  password: string;
  avatar?: string;
  name?: string;
  surname?: string;
  token?: string;
}

export interface UserSchema {
  authData?: User;
  _mounted: boolean;
}
