import { Wrapper } from './TableBody.styles';
import { ITableBodyProps } from './TableBody.types';

export function TableBody({ children }: ITableBodyProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
