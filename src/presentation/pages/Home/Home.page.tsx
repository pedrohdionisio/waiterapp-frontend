import { Loader } from 'presentation/components/Loader/Loader.component';
import { OrdersBoard } from 'presentation/components/OrdersBoard/OrdersBoard.component';

import { useListOrders } from 'data/features/Orders/ListOrders/useListOrders';

import { Wrapper } from './Home.styles';

export function Home() {
  const {
    isLoading,
    waiting,
    inProduction,
    done,
  } = useListOrders();

  return (
    <Wrapper>
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <>
          <OrdersBoard orders={waiting} title="Fila de Espera" />

          <OrdersBoard orders={inProduction} title="Em produção" />

          <OrdersBoard orders={done} title="Finalizado" />

        </>
      )}
    </Wrapper>
  );
}
