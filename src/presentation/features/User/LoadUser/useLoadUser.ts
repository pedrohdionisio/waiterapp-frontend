import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import AuthService from 'data/services/auth/Auth.service';
import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

import { queryKeys } from 'shared/constants/queryKeys';

export function useLoadUser() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const { isLoading } = useQuery(
    queryKeys.user.load,
    () => AuthService.getAuthenticatedUser(),
    {
      refetchOnWindowFocus: false,
      onSuccess: ({ user }) => {
        setUser({ user });
      },
      onError: () => { navigate('/'); },
    },
  );

  return {
    isLoading,
  };
}