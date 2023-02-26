import { useRestartDay } from 'data/features/orders/restart-day/useRestartDay';

import { DefaultButton, GhostButton } from 'presentation/components/Button';
import { Icon } from 'presentation/components/Icon';
import { ModalActions, ModalContainer } from 'presentation/components/Modal';

import { ModalBody, Wrapper } from './RestartDayButton.styles';

export function RestartDayButton(): JSX.Element {
  const { theme, isRestartDayModalVisible, setIsRestartDayModalVisible } =
    useRestartDay();

  return (
    <>
      <Wrapper
        onClick={() => {
          setIsRestartDayModalVisible(true);
        }}
      >
        <Icon
          name='history'
          color={theme.colors.primary[500]}
        />
        <span>Reiniciar o dia</span>
      </Wrapper>

      <ModalContainer
        visible={isRestartDayModalVisible}
        onRequestClose={() => {
          setIsRestartDayModalVisible(false);
        }}
        title='Reiniciar o dia'
      >
        <ModalBody>
          <p>
            Ao reiniciar o dia, todos os pedidos serão arquivados no status
            atual e esta ação não poderá ser desfeita.
          </p>

          <p>Deseja reiniciar o dia?</p>
        </ModalBody>

        <ModalActions>
          <GhostButton text='Não, continuar pedidos' />
          <DefaultButton text='Sim, reiniciar o dia' />
        </ModalActions>
      </ModalContainer>
    </>
  );
}
