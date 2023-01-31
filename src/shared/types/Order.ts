import { Product } from './Product';

export type OrderStatusType = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export type OrderType = {
  _id: string;
  table: string;
  status: OrderStatusType;
  products: {
    product: Product;
    quantity: number;
    _id: string;
  }[];
};
