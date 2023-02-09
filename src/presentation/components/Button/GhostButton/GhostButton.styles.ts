import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: 600;
  transition: all .3s ease-in;
  border: none;

  &:hover {
    opacity: 0.7;
  }
  :disabled {
      background-color: transparent;
      border-color: ${({ theme }) => theme.colors.gray[100]};
      color: ${({ theme }) => theme.colors.gray[100]};
      pointer-events: none;
    }
`;
