import { ReactPortal } from '../ReactPortal';
import { Spinner } from '../Spinner';

import { type ILoaderProps } from './Loader.types';

import { Overlay } from './Loader.styles';

export function Loader({
  isLoading = false
}: ILoaderProps): JSX.Element | null {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId='loader-root'>
      <Overlay>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}
