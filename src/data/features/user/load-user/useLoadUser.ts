import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import AuthService from 'data/services/auth/auth.service';
import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

import { queryKeys } from 'shared/constants/queryKeys';

import { type IUseLoadUser } from './load-user.types';

export function useLoadUser(): IUseLoadUser {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const { isLoading } = useQuery(
    queryKeys.user.load,
    async () => await AuthService.getAuthenticatedUser(),
    {
      refetchOnWindowFocus: false,
      onSuccess: ({ user }) => {
        setUser({ user });
      },
      onError: () => {
        navigate('/');
      }
    }
  );

  return {
    isLoading
  };
}
