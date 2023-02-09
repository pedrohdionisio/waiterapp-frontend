import { Loader } from 'presentation/components/Loader/Loader.component';

import { StyledButton } from './GhostButton.styles';
import { IGhostButtonProps } from './GhostButton.types';

export function GhostButton({ isLoading, text, ...rest }: IGhostButtonProps) {
  return (
    <StyledButton {...rest}>
      {isLoading && <Loader />}

      {!isLoading && <p>{text}</p>}
    </StyledButton>
  );
}
