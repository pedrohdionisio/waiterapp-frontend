import { Button } from '../../components/Button/Button.component';
import { InputContainer } from '../../components/Input/InputContainer/InputContainer.component';
import { PasswordInput } from '../../components/Input/PasswordInput/PasswordInput.component';
import { TextInput } from '../../components/Input/TextInput/TextInput.component';

import { Form } from './SignIn.styles';
import { useSignIn } from './useSignIn';

export function SignIn() {
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

      <Button
        type="submit"
        text="Fazer Login"
        isLoading={isLoading}
        disabled={isLoading}
      />
    </Form>
  );
}
