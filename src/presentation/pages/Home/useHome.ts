import { useQuery } from 'react-query';
import OrdersService from '../../../data/services/orders/Orders.service';
import { OrderType } from '../../../shared/types/Order';

export function useHome() {
  const { data: orders, isLoading } = useQuery<OrderType[]>(
    'orders',
    () => OrdersService.listOrders(),
    {
      refetchOnWindowFocus: false,
    },
  );

  const waiting = orders?.filter((order) => order.status === 'WAITING');
  const inProduction = orders?.filter(
    (order) => order.status === 'IN_PRODUCTION',
  );
  const done = orders?.filter((order) => order.status === 'DONE');

  return {
    isLoading,
    waiting,
    inProduction,
    done,
  };
}
