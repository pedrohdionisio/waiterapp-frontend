import { Wrapper } from './ModalActions.styles';
import { IModalActionsProps } from './ModalActions.types';

export function ModalActions({ children }: IModalActionsProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
