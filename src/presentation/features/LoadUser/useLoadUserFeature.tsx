import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getAuthenticatedUser } from '../../../data/store/slices/Auth/Auth.slice';
import { AppDispatchType, RootStateType } from '../../../data/store/store';

export function useLoadUserFeature() {
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
