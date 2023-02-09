import { ReactNode } from 'react';

export interface IModalContainerProps {
  visible: boolean;
  title: string;
  children: ReactNode;
  size?: 'normal' | 'big';
  onRequestClose: () => void;
}
