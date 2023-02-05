import { OrderType } from 'shared/types/Order';

export function useManageOrder(order: OrderType) {
  const totalPrice = order.products.reduce(
    (total, { product, quantity }) => (total += product.price * quantity),
    0,
  );

  return {
    totalPrice,
  };
}
