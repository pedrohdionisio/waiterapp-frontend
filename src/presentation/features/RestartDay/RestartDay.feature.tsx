import { useState } from 'react';
import { useTheme } from 'styled-components';

import { Icon } from '../../components/Icon/Icon.component';
import { Modal } from '../../components/Modal/Modal.component';

import { ModalBody, Wrapper } from './RestartDay.styles';

export function RestartDay() {
  const [isRestartDayModalVisible, setIsRestartDayModalVisible] = useState(false);

  const theme = useTheme();

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
