import styled, { CSSProperties } from 'styled-components';

export const ContentStyles: CSSProperties = {
  position: 'relative',
  padding: '40px',
  overflow: 'hidden',
};

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 56px;
`;

export const CancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  border: none;
  transition: opacity .3s ease-in;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.primary[500]};
    font-weight: 700;
  }

  &:hover {
    opacity: 0.7;
  }
`;
