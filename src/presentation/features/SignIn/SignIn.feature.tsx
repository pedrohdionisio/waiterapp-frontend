import { Button } from '../../components/Button/Button.component';
import { InputContainer } from '../../components/Input/InputContainer/InputContainer.component';
import { PasswordInput } from '../../components/Input/PasswordInput/PasswordInput.component';
import { TextInput } from '../../components/Input/TextInput/TextInput.component';

import { Form } from './SignIn.styles';
import { useSignIn } from './useSignIn';

export function SignIn() {
  const {
    auth, control, handleSignInUser, handleSubmit,
  } = useSignIn();

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
