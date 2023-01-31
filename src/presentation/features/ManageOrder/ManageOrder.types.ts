import { OrderType } from '../../../shared/types/Order';

export interface IManageOrder {
  order: OrderType;
  visible: boolean;
  onClose: () => void;
}
