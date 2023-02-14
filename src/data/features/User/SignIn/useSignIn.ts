import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from 'data/store/slices/Auth/useAuth.slice';
import AuthService from 'data/services/auth/Auth.service';

import { signInFormSchema } from 'presentation/pages/Login/components/SignInForm/SignInForm.schema';
import { AuthenticateUserPayloadType } from 'data/services/auth/AuthService.type';

export function useSignIn() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const { control, formState: { errors }, handleSubmit } = useForm<AuthenticateUserPayloadType>({
    resolver: yupResolver(signInFormSchema),
  });

  async function handleSignInUser({ email, password }: AuthenticateUserPayloadType) {
    try {
      setIsLoading(true);
      const { token, user } = await AuthService.authenticateUser({ email, password });

      setUser({ token, user });

      window.localStorage.setItem('token', JSON.stringify(token));

      return navigate('/dashboard/home');
    } catch {
      return toast.error('E-mail ou senha incorretos');
    } finally {
      setIsLoading(false);
    }
  }

  return {
    errors,
    control,
    isLoading,
    handleSubmit,
    handleSignInUser,
  };
}
