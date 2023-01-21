import { SignIn } from '../../features/SignIn/SignIn.feature';
import { WelcomeContainer, Wrapper } from './Login.styles';

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

      <SignIn />
    </Wrapper>
  );
}
