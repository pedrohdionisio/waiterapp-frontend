import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

import { Header } from 'presentation/components/Header/Header.component';
import { Sidebar } from 'presentation/components/Sidebar/Sidebar.component';

import { Content, Wrapper } from './Dashboard.styles';
import { LoadUser } from '../Login/components/LoadUser/LoadUser.component';

export function Dashboard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
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
