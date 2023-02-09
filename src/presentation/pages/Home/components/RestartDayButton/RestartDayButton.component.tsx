import { DefaultButton } from 'presentation/components/Button/DefaultButton/DefaultButton.component';
import { GhostButton } from 'presentation/components/Button/GhostButton/GhostButton.component';
import { Icon } from 'presentation/components/Icon/Icon.component';
import { ModalActions } from 'presentation/components/Modal/ModalActions/ModalActions.component';
import { ModalContainer } from 'presentation/components/Modal/ModalContainer/ModalContainer.component';
import { useRestartDay } from 'presentation/features/Orders/RestartDay/useRestartDay';

import { ModalBody, Wrapper } from './RestartDayButton.styles';

export function RestartDayButton() {
  const { theme, isRestartDayModalVisible, setIsRestartDayModalVisible } = useRestartDay();

  return (
    <>
      <Wrapper onClick={() => setIsRestartDayModalVisible(true)}>
        <Icon name="history" color={theme.colors.primary[500]} />
        <span>Reiniciar o dia</span>
      </Wrapper>

      <ModalContainer
        visible={isRestartDayModalVisible}
        onRequestClose={() => setIsRestartDayModalVisible(false)}
        title="Reiniciar o dia"
      >
        <ModalBody>
          <p>
            Ao reiniciar o dia, todos os pedidos serão arquivados no status
            atual e esta ação não poderá ser desfeita.
          </p>

          <p>Deseja reiniciar o dia?</p>
        </ModalBody>

        <ModalActions>
          <GhostButton text="Não, continuar pedidos" />
          <DefaultButton text="Sim, reiniciar o dia" />
        </ModalActions>
      </ModalContainer>
    </>
  );
}
