import { UserType } from '../../../../shared/types/User';

export interface IAuthSlice {
  user: UserType;
  isAuthenticated: boolean;
}

export interface IUseAuth {
  token?: string;
  user: UserType;
}
