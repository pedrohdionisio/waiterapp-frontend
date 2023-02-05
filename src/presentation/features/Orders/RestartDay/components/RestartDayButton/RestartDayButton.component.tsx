import { Icon } from 'presentation/components/Icon/Icon.component';
import { Modal } from 'presentation/components/Modal/Modal.component';

import { useRestartDay } from '../../useRestartDay';

import { ModalBody, Wrapper } from './RestartDayButton.styles';

export function RestartDay() {
  const { theme, isRestartDayModalVisible, setIsRestartDayModalVisible } = useRestartDay();

  return (
    <>
      <Wrapper onClick={() => setIsRestartDayModalVisible(true)}>
        <Icon name="history" color={theme.colors.primary[500]} />
        <span>Reiniciar o dia</span>
      </Wrapper>

      <Modal
        visible={isRestartDayModalVisible}
        onClose={() => setIsRestartDayModalVisible(false)}
        title="Reiniciar o dia"
        primaryActionText="Sim, reiniciar o dia"
        secondaryActionText="Não, continuar pedidos"
        action={() => {}}
      >
        <ModalBody>
          <p>
            Ao reiniciar o dia, todos os pedidos serão arquivados no status
            atual e esta ação não poderá ser desfeita.
          </p>

          <p>Deseja reiniciar o dia?</p>
        </ModalBody>
      </Modal>
    </>
  );
}
