import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import OrdersService from 'data/services/orders/Orders.service';

import { queryKeys } from 'shared/constants/queryKeys';

export function useCancelOrder(id: string, table: string) {
  const mutation = useMutation(queryKeys.orders.cancel, async () => {
    await OrdersService.cancelOrder(id);
  }, {
    onError: () => {
      toast.error('Ocorreu um erro ao cancelar o pedido');
    },
    onSuccess: () => {
      toast.success(`O pedido da mesa ${table} foi cancelado com sucesso`);
    },
  });

  function handleCancelOrder() {
    mutation.mutate();
  }

  return {
    handleCancelOrder,
    isLoading: mutation.isLoading,
    isFinished: mutation.isSuccess,
  };
}
