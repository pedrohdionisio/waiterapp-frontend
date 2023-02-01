import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';
import { IAuthenticateUserPayload } from '../../../data/services/auth/AuthService.type';
import { AppDispatchType, RootStateType } from '../../../data/store/store';
import { authenticationSchema } from '../../../data/schemas/Authentication.schema';
import AuthService from '../../../data/services/auth/Auth.service';
import { setUser } from '../../../data/store/slices/Auth/Auth.slice';

export function useSignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatchType>();
  const auth = useSelector((state: RootStateType) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  const { control, formState: { errors }, handleSubmit } = useForm<IAuthenticateUserPayload>({
    resolver: yupResolver(authenticationSchema),
  });

  async function handleSignInUser({ email, password }: IAuthenticateUserPayload) {
    try {
      setIsLoading(true);
      const { token, user } = await AuthService.authenticateUser({ email, password });

      dispatch(setUser({ token, user }));

      window.localStorage.setItem('token', JSON.stringify(token));

      return navigate('/dashboard/home');
    } catch {
      return toast.success('E-mail ou senha incorretos');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    auth,
    errors,
    control,
    isLoading,
    handleSubmit,
    handleSignInUser,
  };
}
