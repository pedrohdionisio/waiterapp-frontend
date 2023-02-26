import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import OrdersService from 'data/services/orders/orders.service';

import { queryKeys } from 'shared/constants/queryKeys';
import { type OrderStatusType } from 'shared/types/Order';

import { type IUseChangeOrderStatus } from './change-order-status.types';

export function useChangeOrderStatus(
  id: string,
  table: string,
  status: OrderStatusType,
  onClose: () => void
): IUseChangeOrderStatus {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    queryKeys.orders.changeStatus,
    async () => {
      await OrdersService.changeOrderStatus(
        id,
        status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE'
      );
    },
    {
      onError: () => {
        toast.error('Ocorreu um erro ao mudar o status do pedido');
      },
      onSuccess: async () => {
        toast.success(
          `O pedido da mesa ${table} teve o seu status alterado com sucesso`
        );
        onClose();
        await queryClient.invalidateQueries([queryKeys.orders.load]);
      }
    }
  );

  function handleChangeOrderStatus(): void {
    mutation.mutate();
  }

  return {
    handleChangeOrderStatus,
    isChangeStatusLoading: mutation.isLoading
  };
}
