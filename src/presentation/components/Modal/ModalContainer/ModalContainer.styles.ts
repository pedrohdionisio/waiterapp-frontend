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
