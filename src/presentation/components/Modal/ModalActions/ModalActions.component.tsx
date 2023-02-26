import { type IModalActionsProps } from './ModalActions.types';

import { Wrapper } from './ModalActions.styles';

export function ModalActions({ children }: IModalActionsProps): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}
