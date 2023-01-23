import { Product } from './Product';

export type OrderStatus = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export type Order = {
  _id: string;
  table: string;
  status: OrderStatus;
  products: {
    product: Product;
    quantity: number;
    _id: string;
  }[];
};
