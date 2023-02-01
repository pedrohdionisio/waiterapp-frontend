import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthService from '../../../data/services/auth/Auth.service';
import { setUser } from '../../../data/store/slices/Auth/Auth.slice';
import { AppDispatchType } from '../../../data/store/store';

export function useLoadUser() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch<AppDispatchType>();
  const navigate = useNavigate();

  const loadUser = useCallback(async () => {
    try {
      const { user } = await AuthService.getAuthenticatedUser();

      return dispatch(setUser({ user }));
    } catch {
      navigate('/');

      return toast.error('Ocorreu um erro ao carregar os dados do usuário');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return {
    isLoading,
  };
}
