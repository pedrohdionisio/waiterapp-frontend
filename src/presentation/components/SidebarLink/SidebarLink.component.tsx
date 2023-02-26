import { NavLink } from 'react-router-dom';

import { Icon } from '../Icon';

import { type ISidebarLinkProps } from './SidebarLink.types';

import { Wrapper } from './SidebarLink.styles';

export function SidebarLink({
  icon,
  text,
  to = '',
  button = false,
  onClick
}: ISidebarLinkProps): JSX.Element {
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
        <button
          type='button'
          onClick={onClick}
        >
          <Icon name={icon} />
          {text}
        </button>
      )}
    </Wrapper>
  );
}
