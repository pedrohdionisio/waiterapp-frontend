import styled from 'styled-components';

export const Wrapper = styled.thead`
  background: rgba(204, 204, 204, 0.2);

  th:last-child {
    border-top-right-radius: 10px;
  }

  th:first-child {
    border-top-left-radius: 10px;
  }
`;
