import { type Dispatch, type SetStateAction } from 'react';

import { type OrderType } from 'shared/types/Order';

export interface IUseOrdersHistoryTable {
  handleExcludeOrderRegister: (order: OrderType) => void;
  setIsOrderModalVisible: Dispatch<SetStateAction<boolean>>;
  isOrderModalVisible: boolean;
  selectedOrder: OrderType | null;
}
