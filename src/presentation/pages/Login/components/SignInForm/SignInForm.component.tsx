import { DefaultButton } from 'presentation/components/Button/DefaultButton/DefaultButton.component';
import { InputContainer } from 'presentation/components/Input/InputContainer/InputContainer.component';
import { PasswordInput } from 'presentation/components/Input/PasswordInput/PasswordInput.component';
import { TextInput } from 'presentation/components/Input/TextInput/TextInput.component';
import { useSignIn } from 'presentation/features/User/SignIn/useSignIn';

import { Form } from './SignInForm.styles';

export function SignInForm() {
  const {
    isLoading, control, errors, handleSignInUser, handleSubmit,
  } = useSignIn();

  return (
    <Form onSubmit={handleSubmit(handleSignInUser)}>
      <InputContainer label="E-mail" error={errors.email?.message}>
        <TextInput
          control={control}
          name="email"
          type="email"
          placeholder="Informe seu e-mail"
          hasError={!!errors.email}
        />
      </InputContainer>

      <InputContainer label="Senha" error={errors.password?.message}>
        <PasswordInput
          control={control}
          name="password"
          placeholder="Informe sua senha"
          hasError={!!errors.password}
        />
      </InputContainer>

      <DefaultButton
        type="submit"
        text="Fazer Login"
        isLoading={isLoading}
        disabled={isLoading}
      />
    </Form>
  );
}
