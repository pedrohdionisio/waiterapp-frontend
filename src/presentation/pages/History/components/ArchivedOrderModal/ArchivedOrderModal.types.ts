import { type OrderType } from 'shared/types/Order';

export interface IArchivedOrderModalProps {
  order: OrderType;
  visible: boolean;
  onClose: () => void;
}
