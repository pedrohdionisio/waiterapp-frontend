import { InputHTMLAttributes } from 'react';

import { Control } from 'react-hook-form';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control?: Control;
  hasError?: boolean;
  defaultValue?: string;
}

export type TextInputStylesType = Pick<ITextInputProps, 'hasError'>
