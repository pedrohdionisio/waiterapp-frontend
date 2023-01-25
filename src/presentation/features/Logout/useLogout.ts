import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../data/store/slices/Auth/Auth.slice';
import { AppDispatchType } from '../../../data/store/store';

export function useLogout() {
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const dispatch = useDispatch<AppDispatchType>();

  function handleLogout() {
    dispatch(logout());
  }

  return {
    isLogoutModalVisible,
    setIsLogoutModalVisible,
    handleLogout,
  };
}
