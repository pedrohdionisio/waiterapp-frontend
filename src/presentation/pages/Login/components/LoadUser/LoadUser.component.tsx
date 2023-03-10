import { useLoadUser } from 'data/features/user/load-user/useLoadUser';

import { SplashScreen } from 'presentation/pages/SplashScreen/SplashScreen.page';

export function LoadUser() {
  const { isLoading } = useLoadUser();

  if (isLoading) {
    return <SplashScreen />;
  }

  return null;
}
