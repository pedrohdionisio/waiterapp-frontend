import { Modal } from 'presentation/components/Modal/Modal.component';
import { SidebarLink } from 'presentation/components/SidebarLink/SidebarLink.component';

import { useLogout } from '../../useLogout';

import { ModalBody, Wrapper } from './LogoutButton.styles';

export function LogoutButton() {
  const { isLogoutModalVisible, setIsLogoutModalVisible, handleLogout } = useLogout();

  return (
    <Wrapper>
      <Modal
        title="Sair da aplicação"
        visible={isLogoutModalVisible}
        primaryActionText="Sim, sair"
        secondaryActionText="Não, continuar"
        onClose={() => setIsLogoutModalVisible(false)}
        action={handleLogout}
      >
        <ModalBody>
          <p>
            Ao confirmar, você será desconectado da aplicação.
          </p>

          <p>Deseja sair?</p>
        </ModalBody>
      </Modal>
      <SidebarLink
        icon="logout-box"
        button
        text="Sair"
        onClick={() => setIsLogoutModalVisible(true)}
      />
    </Wrapper>
  );
}
