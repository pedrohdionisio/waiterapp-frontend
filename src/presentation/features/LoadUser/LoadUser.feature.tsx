import { SplashScreen } from '../../pages/SplashScreen/SplashScreen.page';

import { useLoadUser } from './useLoadUser';

export function LoadUser() {
  const { isLoading } = useLoadUser();

  if (isLoading) {
    return <SplashScreen />;
  }

  return null;
}
