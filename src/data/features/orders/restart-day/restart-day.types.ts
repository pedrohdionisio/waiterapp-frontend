import { type Dispatch, type SetStateAction } from 'react';

import { type DefaultTheme } from 'styled-components';

export interface IUseRestartDay {
  theme: DefaultTheme;
  isRestartDayModalVisible: boolean;
  setIsRestartDayModalVisible: Dispatch<SetStateAction<boolean>>;
}
