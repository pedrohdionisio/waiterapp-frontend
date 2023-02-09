import { OrderType } from 'shared/types/Order';

export function useShowOrder(order: OrderType) {
  const totalPrice = order.products.reduce(
    (total, { product, quantity }) => (total += product.price * quantity),
    0,
  );

  return {
    totalPrice,
  };
}