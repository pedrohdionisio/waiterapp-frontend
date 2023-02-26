import { type ITableContainerProps } from './TableContainer.types';

import { Wrapper } from './TableContainer.styles';

export function TableContainer({
  children
}: ITableContainerProps): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}
