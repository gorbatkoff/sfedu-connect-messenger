export interface User {
  id: string | number;
  email: string;
  username: string;
  age: number;
  password: string;
}

export interface UserSchema {
  authData?: User;
  _mounted: boolean;
}
