import { Button } from '../../components/Button/Button.component';

import { InputContainer } from '../../components/Input/InputContainer/InputContainer.component';
import { PasswordInput } from '../../components/Input/PasswordInput/PasswordInput.component';
import { TextInput } from '../../components/Input/TextInput/TextInput.component';

import { Form } from './SignIn.styles';

export function SignIn() {
  return (
    <Form>
      <InputContainer label="E-mail">
        <TextInput name="email" type="email" placeholder="Informe seu e-mail" />
      </InputContainer>

      <InputContainer label="Senha">
        <PasswordInput
          name="password"
          placeholder="Informe sua senha"
        />
      </InputContainer>

      <Button text="Fazer Login" />
    </Form>
  );
}
