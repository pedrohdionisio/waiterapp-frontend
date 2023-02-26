import { type ProductType } from './Product';

export type OrderStatusType = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export type OrderType = {
  _id: string;
  table: string;
  status: OrderStatusType;
  created_at: Date;
  products: {
    _id: string;
    product: ProductType;
    quantity: number;
  }[];
};
