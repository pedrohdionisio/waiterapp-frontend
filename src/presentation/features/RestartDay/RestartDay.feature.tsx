import { useTheme } from 'styled-components';
import { Icon } from '../../components/Icon/Icon.component';
import { Wrapper } from './RestartDay.styles';

export function RestartDay() {
  const theme = useTheme();

  return (
    <Wrapper>
      <Icon name="history" color={theme.colors.primary[500]} />
      <span>Reiniciar o dia</span>
    </Wrapper>
  );
}
