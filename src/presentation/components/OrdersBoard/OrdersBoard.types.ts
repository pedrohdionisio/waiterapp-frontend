import { OrderType } from 'shared/types/Order';

export interface IOrdersBoardProps {
  orders: OrderType[] | undefined;
  title: string;
}
