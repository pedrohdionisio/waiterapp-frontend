import { useTheme } from 'styled-components';

import { Spinner } from 'presentation/components/Spinner';

import { type IDefaultButtonProps } from './DefaultButton.types';

import { StyledButton } from './DefaultButton.styles';

export function DefaultButton({
  text,
  secondary,
  isLoading,
  ...rest
}: IDefaultButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <StyledButton {...rest}>
      {isLoading && (
        <Spinner
          color={theme.colors.white}
          size={10}
        />
      )}

      {!isLoading && <p>{text}</p>}
    </StyledButton>
  );
}
