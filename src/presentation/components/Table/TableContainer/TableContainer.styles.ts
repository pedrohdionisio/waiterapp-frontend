import styled from 'styled-components';

export const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }
`;
