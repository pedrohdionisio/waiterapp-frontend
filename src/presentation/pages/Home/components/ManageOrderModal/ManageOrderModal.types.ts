import { type OrderType } from 'shared/types/Order';

export interface IManageOrderModalProps {
  order: OrderType;
  visible: boolean;
  onClose: () => void;
}
