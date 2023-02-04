import { Navigate } from 'react-router-dom';

import { useAuth } from '../../../data/store/slices/Auth/useAuth.slice';

import { SignIn } from '../../features/SignIn/SignIn.feature';
import { WelcomeContainer, Wrapper } from './Login.styles';

export function Login() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard/home" />;
  }

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
