import styled, { css } from 'styled-components';

import { type TextInputStylesType } from './TextInput.types';

export const StyledInput = styled.input<TextInputStylesType>`
  background: transparent;
  caret-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 14px;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  outline: none;
  transition: border-color 0.3s ease-in;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray[500]};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.primary[500]};
    `}
`;
