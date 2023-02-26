import { type OrderType } from 'shared/types/Order';

export interface IUseListOrders {
  isLoading: boolean;
  waiting: OrderType[] | undefined;
  inProduction: OrderType[] | undefined;
  done: OrderType[] | undefined;
  isError: boolean;
}
