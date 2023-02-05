import { useDispatch, useSelector } from 'react-redux';

import { AppDispatchType, RootStateType } from 'data/store/store';

import { logout, setUser } from './Auth.slice';
import { IUseAuth } from './AuthSlice.types';

export function useAuth() {
  const dispatch = useDispatch<AppDispatchType>();
  const {
    isAuthenticated,
    user,
  } = useSelector((state: RootStateType) => state.auth);

  return {
    setUser: (params: IUseAuth) => dispatch(setUser(params)),
    logout: () => dispatch(logout()),
    isAuthenticated,
    user,
  };
}
