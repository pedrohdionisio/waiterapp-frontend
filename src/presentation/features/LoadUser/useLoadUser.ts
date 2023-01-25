import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAuthenticatedUser } from '../../../data/store/slices/Auth/AuthThunks';

import { AppDispatchType, RootStateType } from '../../../data/store/store';

export function useLoadUser() {
  const dispatch = useDispatch<AppDispatchType>();
  const { isLoading } = useSelector(
    (state: RootStateType) => state.auth,
  );

  const loadUser = useCallback(async () => {
    await dispatch(getAuthenticatedUser());
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return {
    isLoading,
  };
}
