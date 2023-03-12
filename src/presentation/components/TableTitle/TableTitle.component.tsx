import { type ITableTitleProps } from './TableTitle.types';

import { Wrapper } from './TableTitle.styles';

export function TableTitle({ title, quantity }: ITableTitleProps): JSX.Element {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <span>{quantity}</span>
    </Wrapper>
  );
}
