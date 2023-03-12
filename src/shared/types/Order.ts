import { type ProductType } from './Product';

export type OrderStatusType = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export type OrderType = {
  _id: string;
  client_name: string;
  table: string;
  status: OrderStatusType;
  created_at: string;
  is_archived: boolean;
  products: {
    _id: string;
    product: ProductType;
    quantity: number;
  }[];
};
