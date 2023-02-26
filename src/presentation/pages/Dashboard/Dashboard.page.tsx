import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

import { Header } from 'presentation/components/Header/';
import { Sidebar } from 'presentation/components/Sidebar/';

import { LoadUser } from '../Login/components/LoadUser';

import { Content, Wrapper } from './Dashboard.styles';

export function Dashboard(): JSX.Element {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <>
      <LoadUser />
      <Wrapper>
        <Sidebar />

        <Content>
          <Header />
          <Outlet />
        </Content>
      </Wrapper>
    </>
  );
}
