import { Navigate } from 'react-router-dom';

import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

import { SignInForm } from './components/SignInForm';

import { WelcomeContainer, Wrapper } from './Login.styles';

export function Login(): JSX.Element {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to='/dashboard/home' />;
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

      <SignInForm />
    </Wrapper>
  );
}
