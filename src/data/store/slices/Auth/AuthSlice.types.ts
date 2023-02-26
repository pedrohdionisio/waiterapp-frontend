import { type IAuthenticateUserResponse } from 'data/services/auth/authService.type';

import { type UserType } from 'shared/types/User';

export interface IAuthSlice {
  user: UserType;
  isAuthenticated: boolean;
}

export interface IUseAuth {
  setUser: (params: IAuthenticateUserResponse) => void;
  logout: () => void;
  isAuthenticated: boolean;
  user: UserType;
}
