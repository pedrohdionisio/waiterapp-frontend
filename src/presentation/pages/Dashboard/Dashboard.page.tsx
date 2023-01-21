import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header.component';

import { Sidebar } from '../../components/Sidebar/Sidebar.component';

import { Content, Wrapper } from './Dashboard.styles';

export function Dashboard() {
  return (
    <Wrapper>
      <Sidebar />

      <Content>
        <Header />
        <Outlet />
      </Content>
    </Wrapper>
  );
}
