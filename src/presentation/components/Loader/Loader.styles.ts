import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
`;

export const Wrapper = styled.div`
  animation: ${rotate} 1s infinite linear;
`;
