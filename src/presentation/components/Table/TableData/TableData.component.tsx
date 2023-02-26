import { type ITableDataProps } from './TableData.types';

import { Wrapper } from './TableData.styles';

export function TableData({ children }: ITableDataProps): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}
