import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;

  thead {
    background: rgba(204, 204, 204, 0.2);

    th {
      padding: 10px;
      text-align: center;
    }

    th:first-child {
      border-top-left-radius: 10px;
    }

    th:last-child {
      border-top-right-radius: 10px;
    }
  }

  tbody {
    background-color: ${({ theme }) => theme.colors.white};

    tr {
      padding: 16px 0;
      border-bottom: 1px solid #dfdfdf;
    }

    tr:last-child {
      border: none;
    }

    td {
      padding: 10px;
      text-align: center;
    }

    td.actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      border-bottom-right-radius: 100px;

      button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        transition: opacity 0.3s ease-in;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`;
