import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  gap: 24px;

  img {
    margin-right: 30px;
  }

  span, p {
    color: ${({ theme }) => theme.colors.white};
  }

  span {
    font-size: 32px;
    font-weight: 400;
  }

`;
