import ReactModal from 'react-modal';

import close from 'shared/assets/images/close.svg';
import { OverlayModalStyles } from 'shared/styles/GlobalStyles';

import { Button } from '../Button/Button.component';

import {
  CancelButton, ContentStyles, ModalActions, ModalHeader,
} from './Modal.styles';
import { IModalProps } from './Modal.types';

export function Modal({
  visible,
  title,
  children,
  primaryActionText,
  secondaryActionText,
  size = 'normal',
  action,
  onClose,
}: IModalProps) {
  return (
    <ReactModal
      isOpen={visible}
      onRequestClose={onClose}
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
        <button onClick={onClose} type="button">
          <img src={close} alt="Fechar modal" />
        </button>
      </ModalHeader>

      {children}

      <ModalActions>
        <CancelButton onClick={onClose}>
          <span>{secondaryActionText}</span>
        </CancelButton>

        <Button text={primaryActionText} onClick={action} />
      </ModalActions>
    </ReactModal>
  );
}
