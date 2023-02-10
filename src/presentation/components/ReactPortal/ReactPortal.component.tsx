import ReactDOM from 'react-dom';
import { IReactPortalProps } from './ReactPortal.types';

export default function ReactPortal({
  children,
  containerId = 'portal-root',
}: IReactPortalProps) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
}
