import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ShortLogo = styled.span`
  font-size: 32px;

  strong {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;
