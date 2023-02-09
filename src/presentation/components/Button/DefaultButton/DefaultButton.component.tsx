import { Loader } from 'presentation/components/Loader/Loader.component';

import { StyledButton } from './DefaultButton.styles';
import { IDefaultButtonProps } from './DefaultButton.types';

export function DefaultButton({
  text, secondary, isLoading, ...rest
}: IDefaultButtonProps) {
  return (
    <StyledButton {...rest}>
      {isLoading && <Loader />}

      {!isLoading && <p>{text}</p>}
    </StyledButton>
  );
}
