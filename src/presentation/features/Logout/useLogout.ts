import { useDispatch } from 'react-redux';
import { logout } from '../../../data/store/slices/Auth/Auth.slice';
import { AppDispatchType } from '../../../data/store/store';

export function useLogout() {
  const dispatch = useDispatch<AppDispatchType>();

  function handleLogout() {
    dispatch(logout());
  }

  return {
    handleLogout,
  };
}
