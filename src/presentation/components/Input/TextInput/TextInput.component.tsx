import { Controller } from 'react-hook-form';

import { StyledInput } from './TextInput.styles';
import { ITextInputProps } from './TextInput.types';

export function TextInput({
  control,
  name,
  defaultValue = '',
  hasError = false,
  ...rest
}: ITextInputProps) {
  if (!control) {
    return <StyledInput name={name} hasError={hasError} {...rest} />;
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
