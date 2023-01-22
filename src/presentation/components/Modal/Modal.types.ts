import { ReactNode } from 'react';

export interface IModalProps {
  visible: boolean;
  title: string;
  children: ReactNode;
  primaryActionText: string;
  secondaryActionText: string;
  size?: 'normal' | 'big';
  action: () => void;
  onClose: () => void;
}
