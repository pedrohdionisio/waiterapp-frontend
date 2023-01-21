import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar/Sidebar.component';
import { Wrapper } from './Dashboard.styles';

export function Dashboard() {
  return (
    <Wrapper>
      <Sidebar />

      <Outlet />
    </Wrapper>
  );
}
