import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { IAuthenticateUserPayload } from '../../../data/services/auth/AuthService.type';
import { authenticateUser } from '../../../data/store/slices/Auth/AuthThunks';
import { AppDispatchType, RootStateType } from '../../../data/store/store';
import { authenticationSchema } from '../../../data/schemas/Authentication.schema';

export function useSignIn() {
  const dispatch = useDispatch<AppDispatchType>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootStateType) => state.auth);

  const { control, formState: { errors }, handleSubmit } = useForm<IAuthenticateUserPayload>({
    resolver: yupResolver(authenticationSchema),
  });

  async function handleSignInUser({ email, password }: IAuthenticateUserPayload) {
    const response = await dispatch(authenticateUser({ email, password }));

    if (!response.payload) {
      return toast.error('E-mail ou senha incorretos');
    }

    return navigate('/dashboard/home');
  }

  return {
    auth,
    errors,
    control,
    handleSubmit,
    handleSignInUser,
  };
}
