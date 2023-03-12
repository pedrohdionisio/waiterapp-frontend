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

  const waiting = orders?.filter(
    order => order.status === 'WAITING' && !order.is_archived
  );
  const inProduction = orders?.filter(
    order => order.status === 'IN_PRODUCTION' && !order.is_archived
  );
  const done = orders?.filter(
    order => order.status === 'DONE' && !order.is_archived
  );
  const archived = orders?.filter(order => order.is_archived && order.status);

  return {
    isLoading: isLoading || isFetching,
    waiting,
    inProduction,
    archived,
    done,
    isError
  };
}
