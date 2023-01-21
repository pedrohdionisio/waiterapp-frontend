import { Wrapper } from './Icon.styles';
import { IIconProps } from './Icon.types';

export function Icon({
  name,
  type = 'line',
  color = '#666666',
  size = '24',
}: IIconProps) {
  return (
    <Wrapper color={color} size={size}>
      <i className={`ri-${name}-${type}`} />
    </Wrapper>
  );
}
