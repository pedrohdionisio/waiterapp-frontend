export interface ISpinnerProps {
  size?: number;
  color?: string;
}

export type SpinnerStylesType = Pick<ISpinnerProps, 'size' | 'color'>
