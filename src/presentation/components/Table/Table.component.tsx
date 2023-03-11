import { type ITableProps } from './Table.types';

import { StyledTable } from './Table.styles';

export function Table({ children }: ITableProps): JSX.Element {
  return <StyledTable>{children}</StyledTable>;
}
