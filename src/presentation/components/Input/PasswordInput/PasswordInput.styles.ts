import styled, { css } from 'styled-components';

import { IPasswordInputProps } from './PasswordInput.types';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;
  transition: border-color .3s ease-in;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const StyledInput = styled.input<IPasswordInputProps>`
  background: transparent;
  caret-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 14px;
  width: 100%;
  padding: 16px;
  outline: none;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  ${({ hasError }) => hasError && css`
    border-color: ${({ theme }) => theme.colors.primary[500]};
  `}
`;

export const InputButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 16px;
  background-color: transparent;
  border: none;
`;
