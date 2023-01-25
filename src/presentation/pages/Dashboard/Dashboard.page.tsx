import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootStateType } from '../../../data/store/store';

import { Header } from '../../components/Header/Header.component';
import { Sidebar } from '../../components/Sidebar/Sidebar.component';
import { LoadUser } from '../../features/LoadUser/LoadUser.feature';

import { Content, Wrapper } from './Dashboard.styles';

export function Dashboard() {
  const { isAuthenticated } = useSelector(
    (state: RootStateType) => state.auth,
  );

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
