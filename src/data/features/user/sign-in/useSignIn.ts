import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import AuthService from 'data/services/auth/auth.service';
import { type IAuthenticateUserPayload } from 'data/services/auth/authService.type';
import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

import { signInFormSchema } from 'presentation/pages/Login/components/SignInForm/SignInForm.schema';

import { type IUseSignIn } from './sign-in.types';

export function useSignIn(): IUseSignIn {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm<IAuthenticateUserPayload>({
    resolver: yupResolver(signInFormSchema)
  });

  async function handleSignInUser({
    email,
    password
  }: IAuthenticateUserPayload): Promise<void> {
    try {
      setIsLoading(true);
      const { token, user } = await AuthService.authenticateUser({
        email,
        password
      });

      setUser({ token, user });

      window.localStorage.setItem('token', JSON.stringify(token));

      navigate('/dashboard/home');
      return;
    } catch {
      toast.error('E-mail ou senha incorretos');
      return;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    errors,
    control,
    isLoading,
    handleSubmit,
    handleSignInUser
  };
}
