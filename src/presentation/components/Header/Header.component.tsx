import { useLocation } from 'react-router-dom';

import { Icon } from 'presentation/components/Icon';
import { RestartDayButton } from 'presentation/pages/Home/components/RestartDayButton';

import { headerTexts } from 'shared/constants/headerTexts';

import { Info, Wrapper } from './Header.styles';

export function Header(): JSX.Element {
  const location = useLocation();

  const [, , route] = location.pathname.split('/');

  return (
    <Wrapper>
      <Info>
        <div>
          <Icon
            name={headerTexts[route].icon}
            color='#333333'
            size='32'
          />
          <h1>{headerTexts[route].title}</h1>
        </div>

        <p>{headerTexts[route].text}</p>
      </Info>

      {route === 'home' && <RestartDayButton />}
    </Wrapper>
  );
}
