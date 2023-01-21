import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  gap: 8px;
  border: none;
  transition: opacity 0.3s ease-in;

  span {
    color: ${({ theme }) => theme.colors.primary[500]};
    font-weight: 600;
  }

  &:hover {
    opacity: 0.8;
  }
`;
