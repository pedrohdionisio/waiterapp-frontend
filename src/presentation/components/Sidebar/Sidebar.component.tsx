import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

import { LogoutButton } from 'presentation/pages/Login/components/LogoutButton/LogoutButton.component';

import { SidebarLink } from '../SidebarLink/SidebarLink.component';

import { LinkContainer, ShortLogo, Wrapper } from './Sidebar.styles';

export function Sidebar() {
  const { user } = useAuth();

  return (
    <Wrapper>
      <ShortLogo>
        <strong>W</strong>
        A
      </ShortLogo>

      <LinkContainer>
        <SidebarLink icon="home" to="home" text="Home" />
        <SidebarLink icon="file-list-2" to="historico" text="Histórico" />

        {user.type === 'ADMIN' && (
          <>
            <SidebarLink icon="book-read" to="cardapio" text="Cardápio" />
            <SidebarLink icon="user" to="usuarios" text="Usuários" />
          </>
        )}
      </LinkContainer>

      <LinkContainer>
        <SidebarLink icon="profile" to="perfil" text="Meu Perfil" />
        <LogoutButton />
      </LinkContainer>
    </Wrapper>
  );
}
