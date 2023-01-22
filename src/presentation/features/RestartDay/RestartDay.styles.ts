import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  gap: 8px;
  border: none;
  transition: opacity 0.3s ease-in;

  span {
    color: ${({ theme }) => theme.colors.primary[500]};
    font-weight: 600;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-weight: 500;
  
  p {
    text-align: center;
  }
`;
