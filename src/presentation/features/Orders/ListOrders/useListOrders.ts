import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import OrdersService from 'data/services/orders/Orders.service';

import { OrderType } from 'shared/types/Order';
import { queryKeys } from 'shared/constants/queryKeys';

export function useListOrders() {
  const {
    data: orders, isLoading, isError,
  } = useQuery<OrderType[]>(
    queryKeys.orders.load,
    () => OrdersService.listOrders(),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: () => {
        toast.error('Ocorreu um erro ao carregar os pedidos');
      },
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
    isError,
  };
}
