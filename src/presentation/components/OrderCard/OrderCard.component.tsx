import { Wrapper } from './OrderCard.styles';
import { IOrderCardProps } from './OrderCard.types';

export function OrderCard({ order }: IOrderCardProps) {
  return (
    <Wrapper>
      <strong>
        Mesa
        {' '}
        {order.table}
      </strong>
      <span>
        {order.products.length}
        {' '}
        itens
      </span>
    </Wrapper>
  );
}
