import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

import { Header } from 'presentation/components/Header/Header.component';
import { Sidebar } from 'presentation/components/Sidebar/Sidebar.component';
import { LoadUser } from 'presentation/features/User/LoadUser/components/LoadUser.component';

import { Content, Wrapper } from './Dashboard.styles';

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
