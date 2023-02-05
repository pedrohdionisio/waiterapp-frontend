import { Navigate } from 'react-router-dom';

import { SignInForm } from 'presentation/features/User/SignIn/components/SignInForm/SignInForm.component';

import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

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

      <SignInForm />
    </Wrapper>
  );
}
