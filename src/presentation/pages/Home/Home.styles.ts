import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 8px;
  max-width: 384px;
  width: 100%;
`;

export const BoardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;

  h4 {
    font-size: 18px;
  }

  span {
    padding: 4px 8px;
    background: rgba(204, 204, 204, 0.2);
    border-radius: 4px;
    font-weight: 700;
  }
`;
