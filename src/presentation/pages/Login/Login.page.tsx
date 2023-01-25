import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootStateType } from '../../../data/store/store';
import { SignIn } from '../../features/SignIn/SignIn.feature';
import { WelcomeContainer, Wrapper } from './Login.styles';

export function Login() {
  const { isAuthenticated } = useSelector((state: RootStateType) => state.auth);

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
