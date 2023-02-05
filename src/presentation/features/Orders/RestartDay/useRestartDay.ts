import { useState } from 'react';
import { useTheme } from 'styled-components';

export function useRestartDay() {
  const [isRestartDayModalVisible, setIsRestartDayModalVisible] = useState(false);

  const theme = useTheme();

  return {
    theme,
    isRestartDayModalVisible,
    setIsRestartDayModalVisible,
  };
}
