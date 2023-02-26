import { useState } from 'react';

import { useTheme } from 'styled-components';

import { type IUseRestartDay } from './restart-day.types';

export function useRestartDay(): IUseRestartDay {
  const [isRestartDayModalVisible, setIsRestartDayModalVisible] =
    useState(false);

  const theme = useTheme();

  return {
    theme,
    isRestartDayModalVisible,
    setIsRestartDayModalVisible
  };
}
