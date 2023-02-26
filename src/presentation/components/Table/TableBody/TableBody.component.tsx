import { type ITableBodyProps } from './TableBody.types';

import { Wrapper } from './TableBody.styles';

export function TableBody({ children }: ITableBodyProps): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}
