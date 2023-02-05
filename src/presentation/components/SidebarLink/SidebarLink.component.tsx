import { NavLink } from 'react-router-dom';

import { Icon } from '../Icon/Icon.component';

import { Wrapper } from './SidebarLink.styles';
import { ISidebarLinkProps } from './SidebarLink.types';

export function SidebarLink({
  icon,
  text,
  to = '',
  button = false,
  onClick,
}: ISidebarLinkProps) {
  return (
    <Wrapper>
      {!button && (
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          <Icon name={icon} />
          {text}
        </NavLink>
      )}

      {button && (
        <button type="button" onClick={onClick}>
          <Icon name={icon} />
          {text}
        </button>
      )}
    </Wrapper>
  );
}
