import { type ITableHeadProps } from './TableHead.types';

import { Wrapper } from './TableHead.styles';

export function TableHead({ children }: ITableHeadProps): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}
