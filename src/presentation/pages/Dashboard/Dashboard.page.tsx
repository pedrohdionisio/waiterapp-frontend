import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../../data/store/slices/Auth/useAuth.slice';

import { Header } from '../../components/Header/Header.component';
import { Sidebar } from '../../components/Sidebar/Sidebar.component';

import { LoadUser } from '../../features/LoadUser/LoadUser.feature';

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
