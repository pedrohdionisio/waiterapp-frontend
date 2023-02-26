import { type UserType } from 'shared/types/User';

export interface IAuthenticateUserPayload {
  email: string;
  password: string;
}

export interface IAuthenticateUserResponse {
  token?: string;
  user: UserType;
}

export interface IGetAuthenticatedUserResponse {
  user: UserType;
  isAuthenticated: boolean;
}
