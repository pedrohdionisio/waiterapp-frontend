import { useState } from 'react';

import { type OrderType } from 'shared/types/Order';

import { type IUseOrdersBoard } from './OrdersBoard.types';

export function useOrdersBoard(): IUseOrdersBoard {
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);

  function handleOpenModal(order: OrderType): void {
    setSelectedOrder(order);
    setIsOrderModalVisible(true);
  }

  function handleCloseModal(): void {
    setSelectedOrder(null);
    setIsOrderModalVisible(false);
  }

  return {
    selectedOrder,
    isOrderModalVisible,
    handleCloseModal,
    handleOpenModal
  };
}
