import { useDispatch, useSelector } from 'react-redux';

import { type IAuthenticateUserResponse } from 'data/services/auth/authService.type';
import { type AppDispatchType, type RootStateType } from 'data/store/store';

import { logout, setUser } from './Auth.slice';

import { type IUseAuth } from './AuthSlice.types';

export function useAuth(): IUseAuth {
  const dispatch = useDispatch<AppDispatchType>();
  const { isAuthenticated, user } = useSelector(
    (state: RootStateType) => state.auth
  );

  return {
    setUser: (params: IAuthenticateUserResponse) => dispatch(setUser(params)),
    logout: () => dispatch(logout()),
    isAuthenticated,
    user
  };
}
