import { type ButtonHTMLAttributes } from 'react';

export interface IDefaultButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  secondary?: boolean;
  isLoading?: boolean;
}
