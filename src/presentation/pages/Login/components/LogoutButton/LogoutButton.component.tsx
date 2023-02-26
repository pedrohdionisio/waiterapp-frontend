import { useLogout } from 'data/features/user/logout/useLogout';

import { DefaultButton, GhostButton } from 'presentation/components/Button';
import { ModalActions, ModalContainer } from 'presentation/components/Modal';
import { SidebarLink } from 'presentation/components/SidebarLink';

import { ModalBody, Wrapper } from './LogoutButton.styles';

export function LogoutButton(): JSX.Element {
  const { isLogoutModalVisible, setIsLogoutModalVisible, handleLogout } =
    useLogout();

  return (
    <Wrapper>
      <ModalContainer
        title='Sair da aplicação'
        visible={isLogoutModalVisible}
        onRequestClose={() => {
          setIsLogoutModalVisible(false);
        }}
      >
        <ModalBody>
          <p>Ao confirmar, você será desconectado da aplicação.</p>

          <p>Deseja sair?</p>
        </ModalBody>

        <ModalActions>
          <GhostButton
            text='Não, continuar'
            onClick={() => {
              setIsLogoutModalVisible(false);
            }}
          />
          <DefaultButton
            text='Sim, sair'
            onClick={handleLogout}
          />
        </ModalActions>
      </ModalContainer>

      <SidebarLink
        icon='logout-box'
        button
        text='Sair'
        onClick={() => {
          setIsLogoutModalVisible(true);
        }}
      />
    </Wrapper>
  );
}
