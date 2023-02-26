import { type ITableRowProps } from './TableRow.types';

import { Wrapper } from './TableRow.styles';

export function TableRow({ children }: ITableRowProps): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}
