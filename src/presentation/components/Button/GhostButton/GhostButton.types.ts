import { type ButtonHTMLAttributes } from 'react';

export interface IGhostButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  text: string;
}
