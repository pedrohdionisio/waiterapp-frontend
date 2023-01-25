import styled from 'styled-components';

export const Wrapper = styled.div`
  button, a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[500]};
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  .active {
    color: ${({ theme }) => theme.colors.primary[500]};

    i {
      color: ${({ theme }) => theme.colors.primary[500]};
    }

    &::after {
      content: '';
      margin-top: 6px;
      width: 20px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary[500]};
      border-radius: 50%;
    }
  }
`;
