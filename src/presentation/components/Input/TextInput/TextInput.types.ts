/* eslint-disable @typescript-eslint/no-explicit-any */
import { type InputHTMLAttributes } from 'react';

import { type Control } from 'react-hook-form';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control?: Control<any, any>;
  hasError?: boolean;
  defaultValue?: string;
}

export type TextInputStylesType = Pick<ITextInputProps, 'hasError'>;
