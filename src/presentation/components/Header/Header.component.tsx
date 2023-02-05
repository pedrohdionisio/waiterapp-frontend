import { useLocation } from 'react-router-dom';

import { RestartDay } from 'presentation/features/Orders/RestartDay/components/RestartDayButton/RestartDayButton.component';
import { Icon } from 'presentation/components/Icon/Icon.component';

import { headerTexts } from 'shared/constants/headerTexts';

import { Info, Wrapper } from './Header.styles';

export function Header() {
  const location = useLocation();

  const [, , route] = location.pathname.split('/');

  return (
    <Wrapper>
      <Info>
        <div>
          <Icon name={headerTexts[route].icon} color="#333333" size="32" />
          <h1>{headerTexts[route].title}</h1>
        </div>

        <p>{headerTexts[route].text}</p>
      </Info>

      {route === 'home' && <RestartDay />}
    </Wrapper>
  );
}
