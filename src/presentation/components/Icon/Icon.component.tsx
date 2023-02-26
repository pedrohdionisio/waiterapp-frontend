import { type IIconProps } from './Icon.types';

import { Wrapper } from './Icon.styles';

export function Icon({
  name,
  type = 'line',
  color = '#666666',
  size = '24'
}: IIconProps): JSX.Element {
  return (
    <Wrapper
      color={color}
      size={size}
    >
      <i className={`ri-${name}-${type}`} />
    </Wrapper>
  );
}
