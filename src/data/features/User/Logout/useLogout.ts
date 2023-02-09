import { useState } from 'react';

import { useAuth } from 'data/store/slices/Auth/useAuth.slice';

export function useLogout() {
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const { logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return {
    isLogoutModalVisible,
    setIsLogoutModalVisible,
    handleLogout,
  };
}
