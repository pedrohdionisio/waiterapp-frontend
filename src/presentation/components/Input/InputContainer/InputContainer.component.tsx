import info from '../../../../shared/assets/images/info.svg';

import { ErrorMessage, Label, Wrapper } from './InputContainer.styles';
import { IInputContainerProps } from './InputContainer.types';

export function InputContainer({
  label,
  error,
  children,
}: IInputContainerProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>

      {children}

      {error && (
        <ErrorMessage>
          <img src={info} alt="Error" />
          {error}
        </ErrorMessage>
      )}
    </Wrapper>
  );
}
