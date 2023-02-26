import ReactDOM from 'react-dom';

import { type IReactPortalProps } from './ReactPortal.types';

export function ReactPortal({
  children,
  containerId = 'portal-root'
}: IReactPortalProps): JSX.Element {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
}
