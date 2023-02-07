import { Wrapper } from './TableHead.styles';
import { ITableHeadProps } from './TableHead.types';

export function TableHead({ children }: ITableHeadProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
