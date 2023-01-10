import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  secondary?: boolean;
  isLoading?: boolean;
}

export type ButtonStylesType = Pick<IButtonProps, 'secondary'>
