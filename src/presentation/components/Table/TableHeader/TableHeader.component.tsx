import { type ITableHeaderProps } from './TableHeader.types';

import { Wrapper } from './TableHeader.styles';

export function TableHeader({ children }: ITableHeaderProps): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}
