import { type OrderType } from 'shared/types/Order';

export interface IOrdersBoardProps {
  orders: OrderType[] | undefined;
  title: string;
}

export interface IUseOrdersBoard {
  selectedOrder: OrderType | null;
  isOrderModalVisible: boolean;
  handleCloseModal: () => void;
  handleOpenModal: (order: OrderType) => void;
}
