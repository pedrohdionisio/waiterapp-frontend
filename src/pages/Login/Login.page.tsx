import { Button } from '../../components/Button/Button.component';
import { InputContainer } from '../../components/InputContainer/InputContainer.component';
import { TextInput } from '../../components/TextInput/TextInput.component';

import { WelcomeContainer, Wrapper, Form } from './Login.styles';

export function Login() {
  return (
    <Wrapper>
      <WelcomeContainer>
        <span>Bem vindo(a) ao</span>
        <p>
          <strong>WAITER</strong>
          APP
        </p>
      </WelcomeContainer>

      <Form>
        <InputContainer label="E-mail">
          <TextInput
            name="email"
            type="email"
            placeholder="Informe seu e-mail"
          />
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
    </Wrapper>
  );
}
