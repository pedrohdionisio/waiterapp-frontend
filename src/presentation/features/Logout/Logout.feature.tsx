import { SidebarLink } from '../../components/SidebarLink/SidebarLink.component';
import { useLogout } from './useLogout';

export function Logout() {
  const { handleLogout } = useLogout();

  return (
    <SidebarLink icon="logout-box" button text="Sair" onClick={handleLogout} />
  );
}
