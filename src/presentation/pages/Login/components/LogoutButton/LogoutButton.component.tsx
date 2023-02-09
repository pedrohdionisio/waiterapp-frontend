import { DefaultButton } from 'presentation/components/Button/DefaultButton/DefaultButton.component';
import { GhostButton } from 'presentation/components/Button/GhostButton/GhostButton.component';
import { ModalActions } from 'presentation/components/Modal/ModalActions/ModalActions.component';
import { ModalContainer } from 'presentation/components/Modal/ModalContainer/ModalContainer.component';
import { SidebarLink } from 'presentation/components/SidebarLink/SidebarLink.component';

import { useLogout } from 'data/features/User/Logout/useLogout';

import { ModalBody, Wrapper } from './LogoutButton.styles';

export function LogoutButton() {
  const { isLogoutModalVisible, setIsLogoutModalVisible, handleLogout } = useLogout();

  return (
    <Wrapper>
      <ModalContainer
        title="Sair da aplicação"
        visible={isLogoutModalVisible}
        onRequestClose={() => setIsLogoutModalVisible(false)}
      >
        <ModalBody>
          <p>Ao confirmar, você será desconectado da aplicação.</p>

          <p>Deseja sair?</p>
        </ModalBody>

        <ModalActions>
          <GhostButton
            text="Não, continuar"
            onClick={() => setIsLogoutModalVisible(false)}
          />
          <DefaultButton text="Sim, sair" onClick={handleLogout} />
        </ModalActions>
      </ModalContainer>

      <SidebarLink
        icon="logout-box"
        button
        text="Sair"
        onClick={() => setIsLogoutModalVisible(true)}
      />
    </Wrapper>
  );
}
