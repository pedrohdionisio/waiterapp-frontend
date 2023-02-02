import { Loader } from '../../components/Loader/Loader.component';
import { OrdersBoard } from '../../components/OrdersBoard/OrdersBoard.component';

import { useHome } from './useHome';
import { LoaderContainer, Wrapper } from './Home.styles';

export function Home() {
  const {
    isLoading,
    waiting,
    inProduction,
    done,
  } = useHome();

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
    <Wrapper>
      <OrdersBoard orders={waiting} title="Fila de Espera" />

      <OrdersBoard orders={inProduction} title="Em produção" />

      <OrdersBoard orders={done} title="Finalizado" />
    </Wrapper>
  );
}
