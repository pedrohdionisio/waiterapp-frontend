import { useState } from 'react';

import { type OrderType } from 'shared/types/Order';

import { type IUseOrdersHistoryTable } from './OrdersHistoryTable.types';

export function useOrdersHistoryTable(): IUseOrdersHistoryTable {
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);

  function handleExcludeOrderRegister(order: OrderType): void {
    setSelectedOrder(order);
    setIsOrderModalVisible(true);
  }

  return {
    handleExcludeOrderRegister,
    setIsOrderModalVisible,
    isOrderModalVisible,
    selectedOrder
  };
}
