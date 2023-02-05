import { SyntheticEvent, useState } from 'react';
import { Controller } from 'react-hook-form';

import eye from 'shared/assets/images/eye.svg';
import eyeHidden from 'shared/assets/images/eye-hidden.svg';

import { InputButton, StyledInput, Wrapper } from './PasswordInput.styles';
import { IPasswordInputProps } from './PasswordInput.types';

export function PasswordInput({
  control,
  name,
  defaultValue = '',
  hasError = false,
  ...rest
}: IPasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handlePasswordVisibilityChange(e: SyntheticEvent) {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  }

  if (!control) {
    return (
      <Wrapper hasError={hasError}>
        <StyledInput
          name={name}
          type={isPasswordVisible ? 'text' : 'password'}
          {...rest}
        />
        <InputButton onClick={handlePasswordVisibilityChange}>
          <img
            src={isPasswordVisible ? eyeHidden : eye}
            alt={isPasswordVisible ? 'Esconder senha' : 'Mostrar senha'}
          />
        </InputButton>
      </Wrapper>
    );
  }

  return (
    <Wrapper hasError={hasError}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <StyledInput
            name={name}
            type={isPasswordVisible ? 'text' : 'password'}
            onChange={onChange}
            value={value}
            {...rest}
          />
        )}
        defaultValue={defaultValue}
      />

      <InputButton onClick={handlePasswordVisibilityChange}>
        <img
          src={isPasswordVisible ? eyeHidden : eye}
          alt={isPasswordVisible ? 'Esconder senha' : 'Mostrar senha'}
        />
      </InputButton>
    </Wrapper>
  );
}
