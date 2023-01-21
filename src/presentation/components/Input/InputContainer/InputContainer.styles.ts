import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary[500]};
  
  img {
    color: red;
  }
`;
