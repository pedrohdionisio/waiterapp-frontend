import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import OrdersService from 'data/services/orders/orders.service';

import { queryKeys } from 'shared/constants/queryKeys';

import { type IUseCancelOrderReturn } from './cancel-order.types';

export function useCancelOrder(
  id: string,
  table: string,
  onClose: () => void
): IUseCancelOrderReturn {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    queryKeys.orders.cancel,
    async () => {
      await OrdersService.cancelOrder(id);
    },
    {
      onError: () => {
        toast.error('Ocorreu um erro ao cancelar o pedido');
      },
      onSuccess: async () => {
        toast.success(`O pedido da mesa ${table} foi cancelado com sucesso`);
        onClose();
        await queryClient.invalidateQueries([queryKeys.orders.load]);
      }
    }
  );

  function handleCancelOrder(): void {
    mutation.mutate();
  }

  return {
    handleCancelOrder,
    isCancelOrderLoading: mutation.isLoading
  };
}
