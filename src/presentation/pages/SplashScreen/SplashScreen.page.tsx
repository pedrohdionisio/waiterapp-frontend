import logo from '../../../shared/assets/images/logo.svg';

import { Wrapper } from './SplashScreen.styles';

export function SplashScreen() {
  return (
    <Wrapper>
      <img src={logo} alt="" />

      <span>
        <strong>WAITER</strong>
        APP
      </span>

      <p>O aplicativo do Garçom</p>
    </Wrapper>
  );
}
