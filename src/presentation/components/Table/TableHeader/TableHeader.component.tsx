import { Wrapper } from './TableHeader.styles';
import { ITableHeaderProps } from './TableHeader.types';

export function TableHeader({ children }: ITableHeaderProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
