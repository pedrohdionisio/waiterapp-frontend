import { Wrapper } from './TableRow.styles';
import { ITableRowProps } from './TableRow.types';

export function TableRow({ children }: ITableRowProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
