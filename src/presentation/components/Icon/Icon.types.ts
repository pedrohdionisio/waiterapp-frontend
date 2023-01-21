export interface IIconProps {
  name: string;
  type?: 'line' | 'fill';
  size?: string;
  color?: string;
}

export type IconStylesType = Pick<IIconProps, 'color' | 'size'>;
