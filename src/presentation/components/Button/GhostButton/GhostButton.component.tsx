import { Spinner } from 'presentation/components/Spinner';

import { type IGhostButtonProps } from './GhostButton.types';

import { StyledButton } from './GhostButton.styles';

export function GhostButton({
  isLoading,
  text,
  ...rest
}: IGhostButtonProps): JSX.Element {
  return (
    <StyledButton {...rest}>
      {isLoading && <Spinner size={10} />}

      {!isLoading && <p>{text}</p>}
    </StyledButton>
  );
}
