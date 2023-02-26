import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import OrdersService from 'data/services/orders/orders.service';

import { queryKeys } from 'shared/constants/queryKeys';
import { type OrderType } from 'shared/types/Order';

import { type IUseListOrders } from './list-orders.types';

export function useListOrders(): IUseListOrders {
  const {
    data: orders,
    isLoading,
    isError,
    isFetching
  } = useQuery<OrderType[]>(
    queryKeys.orders.load,
    async () => await OrdersService.listOrders(),
    {
      onError: () => {
        toast.error('Ocorreu um erro ao carregar os pedidos');
      }
    }
  );

  const waiting = orders?.filter(order => order.status === 'WAITING');
  const inProduction = orders?.filter(
    order => order.status === 'IN_PRODUCTION'
  );
  const done = orders?.filter(order => order.status === 'DONE');

  return {
    isLoading: isLoading || isFetching,
    waiting,
    inProduction,
    done,
    isError
  };
}
