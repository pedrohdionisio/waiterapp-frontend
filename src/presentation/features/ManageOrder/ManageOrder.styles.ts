import styled from 'styled-components';

export const ModalBody = styled.div``;

export const OrderStatus = styled.div`
  margin-bottom: 32px;

  p {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const OrderProducts = styled.div`
  p {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 16px;
  }
`;

export const ProductsList = styled.div`
  overflow-y: scroll;
  max-height: 220px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary[500]};
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & + & {
    margin-top: 16px;
  }

  img {
    width: 70px;
    height: 52px;
    border-radius: 6px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;

  h4 {
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 6px;
  }
  
  span {
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-right: 12px;
  }

  div {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;
