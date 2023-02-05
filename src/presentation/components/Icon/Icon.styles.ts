import styled from 'styled-components';

import { IconStylesType } from './Icon.types';

export const Wrapper = styled.div<IconStylesType>`
  i {
    font-size: ${({ size }) => `${size}px`};
    color: ${({ color }) => color};
  }
`;
