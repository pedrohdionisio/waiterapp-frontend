import { useState } from 'react';
import { OrderType } from '../../../shared/types/Order';

export function useOrdersBoard() {
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);

  function handleOpenModal(order: OrderType) {
    setSelectedOrder(order);
    setIsOrderModalVisible(true);
  }

  function handleCloseModal() {
    setSelectedOrder(null);
    setIsOrderModalVisible(false);
  }

  return {
    selectedOrder,
    isOrderModalVisible,
    handleCloseModal,
    handleOpenModal,
  };
}
