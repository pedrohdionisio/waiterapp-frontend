import { SplashScreen } from '../../pages/SplashScreen/SplashScreen.page';

import { useLoadUserFeature } from './useLoadUserFeature';

export function LoadUser() {
  const { isLoading } = useLoadUserFeature();

  if (isLoading) {
    return <SplashScreen />;
  }

  return null;
}
