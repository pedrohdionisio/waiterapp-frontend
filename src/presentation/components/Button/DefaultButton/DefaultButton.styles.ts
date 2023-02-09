import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: 44px;
  padding: 8px 16px;
  transition: all .3s ease-in;

  &:hover {
    opacity: 0.7;
  }

  :disabled {
    border-color: ${({ theme }) => theme.colors.gray[100]};
    background-color: ${({ theme }) => theme.colors.gray[100]};
    pointer-events: none;
  }
`;
