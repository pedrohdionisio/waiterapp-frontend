import info from 'shared/assets/images/info.svg';

import { type IInputContainerProps } from './InputContainer.types';

import { ErrorMessage, Label, Wrapper } from './InputContainer.styles';

export function InputContainer({
  label,
  error,
  children
}: IInputContainerProps): JSX.Element {
  return (
    <Wrapper>
      <Label>{label}</Label>

      {children}

      {error && (
        <ErrorMessage>
          <img
            src={info}
            alt='Error'
          />
          {error}
        </ErrorMessage>
      )}
    </Wrapper>
  );
}
