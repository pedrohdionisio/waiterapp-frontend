import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthService from '../../../data/services/auth/Auth.service';
import { setUser } from '../../../data/store/slices/Auth/Auth.slice';
import { AppDispatchType } from '../../../data/store/store';

export function useLoadUser() {
  const dispatch = useDispatch<AppDispatchType>();
  const navigate = useNavigate();

  const { isLoading } = useQuery(
    'user',
    () => AuthService.getAuthenticatedUser(),
    {
      refetchOnWindowFocus: false,
      onSuccess: ({ user }) => {
        dispatch(setUser({ user }));
      },
      onError: () => { navigate('/'); },
    },
  );

  return {
    isLoading,
  };
}
