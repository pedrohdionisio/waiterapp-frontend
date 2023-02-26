import { Controller } from 'react-hook-form';

import { type ITextInputProps } from './TextInput.types';

import { StyledInput } from './TextInput.styles';

export function TextInput({
  control,
  name,
  defaultValue = '',
  hasError = false,
  ...rest
}: ITextInputProps): JSX.Element {
  if (!control) {
    return (
      <StyledInput
        name={name}
        hasError={hasError}
        {...rest}
      />
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <StyledInput
          name={name}
          onChange={onChange}
          value={value}
          hasError={hasError}
          {...rest}
        />
      )}
      defaultValue={defaultValue}
    />
  );
}
