import { type ReactNode } from 'react';

export interface IInputContainerProps {
  label: string;
  error?: string;
  children: ReactNode;
}
