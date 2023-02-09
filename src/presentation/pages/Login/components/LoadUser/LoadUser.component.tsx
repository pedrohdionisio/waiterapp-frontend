import { useLoadUser } from 'presentation/features/User/LoadUser/useLoadUser';
import { SplashScreen } from 'presentation/pages/SplashScreen/SplashScreen.page';

export function LoadUser() {
  const { isLoading } = useLoadUser();

  if (isLoading) {
    return <SplashScreen />;
  }

  return null;
}
