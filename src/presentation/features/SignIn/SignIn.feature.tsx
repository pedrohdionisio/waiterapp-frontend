import { Button } from '../../components/Button/Button.component';
import { InputContainer } from '../../components/InputContainer/InputContainer.component';
import { TextInput } from '../../components/TextInput/TextInput.component';
import { Form } from './SignIn.styles';

export function SignIn() {
  return (
    <Form>
      <InputContainer label="E-mail">
        <TextInput name="email" type="email" placeholder="Informe seu e-mail" />
      </InputContainer>

      <InputContainer label="Senha">
        <TextInput
          name="password"
          type="password"
          placeholder="Informe sua senha"
        />
      </InputContainer>

      <Button text="Fazer Login" />
    </Form>
  );
}
