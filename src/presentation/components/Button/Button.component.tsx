import { Loader } from '../Loader/Loader.component';

import { StyledButton } from './Button.styles';
import { IButtonProps } from './Button.types';

export function Button({
  text, secondary, isLoading, ...rest
}: IButtonProps) {
  return (
    <StyledButton secondary={secondary} {...rest}>
      {isLoading && <Loader />}

      {!isLoading && <p>{text}</p>}
    </StyledButton>
  );
}
