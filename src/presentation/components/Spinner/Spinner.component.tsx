import { StyledSpinner } from './Spinner.styles.ts';

import { type ISpinnerProps } from './Spinner.types';

export function Spinner({ color, size = 32 }: ISpinnerProps): JSX.Element {
  return (
    <StyledSpinner
      size={size}
      color={color}
    />
  );
}
