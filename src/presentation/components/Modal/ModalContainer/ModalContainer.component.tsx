import ReactModal from 'react-modal';

import close from 'shared/assets/images/close.svg';
import { OverlayModalStyles } from 'shared/styles/GlobalStyles';

import { ContentStyles, ModalHeader } from './ModalContainer.styles';
import { IModalContainerProps } from './ModalContainer.types';

export function ModalContainer({
  visible,
  title,
  children,
  size = 'normal',
  onRequestClose,
}: IModalContainerProps) {
  return (
    <ReactModal
      isOpen={visible}
      onRequestClose={onRequestClose}
      style={{
        overlay: OverlayModalStyles,
        content: {
          ...ContentStyles,
          width: size === 'normal' ? '480px' : '928px',
        },
      }}
    >
      <ModalHeader>
        <h2>{title}</h2>
        <button onClick={onRequestClose} type="button">
          <img src={close} alt="Fechar modal" />
        </button>
      </ModalHeader>

      {children}
    </ReactModal>
  );
}
