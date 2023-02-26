import { type Dispatch, type SetStateAction } from 'react';

export interface IUseLogout {
  isLogoutModalVisible: boolean;
  setIsLogoutModalVisible: Dispatch<SetStateAction<boolean>>;
  handleLogout: () => void;
}
