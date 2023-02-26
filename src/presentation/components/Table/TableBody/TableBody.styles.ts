import styled from 'styled-components';

export const Wrapper = styled.tbody`
  background-color: ${({ theme }) => theme.colors.white};

  tr {
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }

  tr:first-child {
    border: none;
  }

  tr:last-child {
    border: none;
  }
`;
