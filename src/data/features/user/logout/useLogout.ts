import { useState } from 'react';

import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

import { type IUseLogout } from './logout.types';

export function useLogout(): IUseLogout {
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const { logout } = useAuth();

  function handleLogout(): void {
    logout();
  }

  return {
    isLogoutModalVisible,
    setIsLogoutModalVisible,
    handleLogout
  };
}
