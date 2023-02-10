import Spinner from 'presentation/components/Spinner/Spinner.component';
import { useTheme } from 'styled-components';

import { StyledButton } from './DefaultButton.styles';
import { IDefaultButtonProps } from './DefaultButton.types';

export function DefaultButton({
  text, secondary, isLoading, ...rest
}: IDefaultButtonProps) {
  const theme = useTheme();

  return (
    <StyledButton {...rest}>
      {isLoading && <Spinner color={theme.colors.white} size={10} />}

      {!isLoading && <p>{text}</p>}
    </StyledButton>
  );
}
