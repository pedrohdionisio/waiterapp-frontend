import styled, { css } from 'styled-components';

import { ButtonStylesType } from './Button.types';

export const StyledButton = styled.button<ButtonStylesType>`
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: 44px;
  padding: 14px 28px;
  transition: all .3s ease-in;

  &:hover {
    opacity: 0.7;
  }

  :disabled {
    border-color: ${({ theme }) => theme.colors.gray[100]};
    background-color: ${({ theme }) => theme.colors.gray[100]};
    pointer-events: none;
  }

  ${({ secondary }) => secondary && css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary[500]};

    :disabled {
      background-color: transparent;
      border-color: ${({ theme }) => theme.colors.gray[100]};
      color: ${({ theme }) => theme.colors.gray[100]};
      pointer-events: none;
    }
  `}
`;
