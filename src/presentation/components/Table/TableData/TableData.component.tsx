import { Wrapper } from './TableData.styles';
import { ITableDataProps } from './TableData.types';

export function TableData({ children }: ITableDataProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
