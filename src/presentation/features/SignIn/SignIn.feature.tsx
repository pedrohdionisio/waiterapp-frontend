import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IAuthenticateUserPayload } from '../../../data/services/auth/AuthService.type';

import { authenticateUser } from '../../../data/store/slices/Auth/Auth.slice';
import { AppDispatchType, RootStateType } from '../../../data/store/store';

import { Button } from '../../components/Button/Button.component';
import { InputContainer } from '../../components/Input/InputContainer/InputContainer.component';
import { PasswordInput } from '../../components/Input/PasswordInput/PasswordInput.component';
import { TextInput } from '../../components/Input/TextInput/TextInput.component';

import { Form } from './SignIn.styles';

export function SignIn() {
  const dispatch = useDispatch<AppDispatchType>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootStateType) => state.auth);

  async function handleSignInUser({ email, password }: IAuthenticateUserPayload) {
    const response = await dispatch(authenticateUser({ email, password }));

    if (!response.payload) {
      return toast.error('E-mail ou senha incorretos');
    }

    return navigate('/dashboard/home');
  }

  const { control, handleSubmit } = useForm<IAuthenticateUserPayload>();

  return (
    <Form onSubmit={handleSubmit(handleSignInUser)}>
      <InputContainer label="E-mail">
        <TextInput
          control={control}
          name="email"
          type="email"
          placeholder="Informe seu e-mail"
        />
      </InputContainer>

      <InputContainer label="Senha">
        <PasswordInput
          control={control}
          name="password"
          placeholder="Informe sua senha"
        />
      </InputContainer>

      <Button
        type="submit"
        text="Fazer Login"
        isLoading={auth.isLoading}
        disabled={auth.isLoading}
      />
    </Form>
  );
}
