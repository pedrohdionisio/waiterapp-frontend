import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 42px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 4px;
  width: 100%;

  strong {
    font-weight: 500;
  }
`;
