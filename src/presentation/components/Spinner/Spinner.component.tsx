import { StyledSpinner } from './Spinner.styles.ts';
import { ISpinnerProps } from './Spinner.types';

export default function Spinner({ color, size = 32 }: ISpinnerProps) {
  return <StyledSpinner size={size} color={color} />;
}
