import Spinner from 'presentation/components/Spinner/Spinner.component';

import { StyledButton } from './GhostButton.styles';
import { IGhostButtonProps } from './GhostButton.types';

export function GhostButton({ isLoading, text, ...rest }: IGhostButtonProps) {
  return (
    <StyledButton {...rest}>
      {isLoading && <Spinner size={10} />}

      {!isLoading && <p>{text}</p>}
    </StyledButton>
  );
}
