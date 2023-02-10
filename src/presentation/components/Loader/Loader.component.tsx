import ReactPortal from '../ReactPortal/ReactPortal.component';
import Spinner from '../Spinner/Spinner.component';
import { Overlay } from './Loader.styles';
import { ILoaderProps } from './Loader.types';

export function Loader({
  isLoading = false,
}: ILoaderProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}
