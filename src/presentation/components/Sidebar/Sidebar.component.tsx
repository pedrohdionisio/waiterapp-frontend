import { SidebarLink } from '../SidebarLink/SidebarLink.component';
import { LinkContainer, ShortLogo, Wrapper } from './Sidebar.styles';

export function Sidebar() {
  return (
    <Wrapper>
      <ShortLogo>
        <strong>W</strong>
        A
      </ShortLogo>

      <LinkContainer>
        <SidebarLink icon="home" to="home" text="Home" />
        <SidebarLink icon="file-list-2" to="historico" text="Histórico" />
        <SidebarLink icon="book-read" to="cardapio" text="Cardápio" />
        <SidebarLink icon="user" to="usuarios" text="Usuários" />
      </LinkContainer>

      <LinkContainer>
        <SidebarLink icon="profile" to="perfil" text="Meu Perfil" />
        <SidebarLink icon="logout-box" to="sair" text="Sair" />
      </LinkContainer>
    </Wrapper>
  );
}
