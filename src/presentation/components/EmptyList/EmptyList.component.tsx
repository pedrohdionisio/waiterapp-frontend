import empty from 'shared/assets/images/empty.svg';

import { type IEmptyListProps } from './EmptyList.types';

import { Wrapper } from './EmptyList.styles';

export function EmptyList({ text }: IEmptyListProps): JSX.Element {
  return (
    <Wrapper>
      <img
        src={empty}
        alt='Lista vazia'
      />

      <h1>{text}</h1>
    </Wrapper>
  );
}
