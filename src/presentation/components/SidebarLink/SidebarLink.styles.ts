import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[500]};
    text-decoration: none;
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
