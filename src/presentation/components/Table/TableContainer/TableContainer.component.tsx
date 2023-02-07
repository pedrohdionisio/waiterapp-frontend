import { Wrapper } from './TableContainer.styles';
import { ITableContainerProps } from './TableContainer.types';

export function TableContainer({ children }: ITableContainerProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
