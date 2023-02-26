import { useSignIn } from 'data/features/user/sign-in/useSignIn';

import { DefaultButton } from 'presentation/components/Button';
import {
  InputContainer,
  PasswordInput,
  TextInput
} from 'presentation/components/Input';

import { Form } from './SignInForm.styles';

export function SignInForm(): JSX.Element {
  const { isLoading, control, errors, handleSignInUser, handleSubmit } =
    useSignIn();

  return (
    <Form onSubmit={handleSubmit(handleSignInUser)}>
      <InputContainer
        label='E-mail'
        error={errors.email?.message}
      >
        <TextInput
          control={control}
          name='email'
          type='email'
          placeholder='Informe seu e-mail'
          hasError={!!errors.email}
        />
      </InputContainer>

      <InputContainer
        label='Senha'
        error={errors.password?.message}
      >
        <PasswordInput
          control={control}
          name='password'
          placeholder='Informe sua senha'
          hasError={!!errors.password}
        />
      </InputContainer>

      <DefaultButton
        type='submit'
        text='Fazer Login'
        isLoading={isLoading}
        disabled={isLoading}
      />
    </Form>
  );
}
