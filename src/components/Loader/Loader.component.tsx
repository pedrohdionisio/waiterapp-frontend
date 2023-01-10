import { Wrapper } from './Loader.styles';
import { ILoaderProps } from './Loader.types';

export function Loader({
  width = '24',
  height = '24',
  color = '#666666',
}: ILoaderProps) {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21.004 12h-3.002M2.997 12h3M12 2.996v3.001m0 15.007v-3.002m6.367.365l-2.122-2.122M5.633 5.633l2.122 2.122m8.49 0l2.122-2.122M7.755 16.245l-2.122 2.122"
        />
      </svg>
    </Wrapper>
  );
}
