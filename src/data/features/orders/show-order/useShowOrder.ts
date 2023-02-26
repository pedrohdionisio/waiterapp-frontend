import { type OrderType } from 'shared/types/Order';

import { type IUseShowOrder } from './show-order.types';

export function useShowOrder(order: OrderType | null): IUseShowOrder {
  const totalPrice = order?.products.reduce(
    (total, { product, quantity }) => (total += product.price * quantity),
    0
  );

  return {
    totalPrice
  };
}
