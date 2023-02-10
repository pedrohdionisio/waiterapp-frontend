import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import OrdersService from 'data/services/orders/Orders.service';

import { queryKeys } from 'shared/constants/queryKeys';
import { OrderStatusType } from 'shared/types/Order';

export function useChangeOrderStatus(
  id: string,
  table: string,
  status: OrderStatusType,
  onClose: () => void,
) {
  const queryClient = useQueryClient();

  const mutation = useMutation(queryKeys.orders.changeStatus, async () => {
    await OrdersService.changeOrderStatus(id, status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE');
  }, {
    onError: () => {
      toast.error('Ocorreu um erro ao mudar o status do pedido');
    },
    onSuccess: () => {
      toast.success(`O pedido da mesa ${table} teve o seu status alterado com sucesso`);
      onClose();
      queryClient.invalidateQueries([queryKeys.orders.load]);
    },
  });

  function handleChangeOrderStatus() {
    mutation.mutate();
  }

  return {
    handleChangeOrderStatus,
    isChangeStatusLoading: mutation.isLoading,
  };
}
