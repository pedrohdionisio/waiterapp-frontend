import { useListOrders } from 'data/features/orders/list-orders/useListOrders';

import { Loader } from 'presentation/components/Loader';
import { OrdersBoard } from 'presentation/components/OrdersBoard';

import { Wrapper } from './Home.styles';

export function Home(): JSX.Element {
  const { isLoading, waiting, inProduction, done } = useListOrders();

  return (
    <Wrapper>
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <>
          <OrdersBoard
            orders={waiting}
            title='Fila de Espera'
          />

          <OrdersBoard
            orders={inProduction}
            title='Em produção'
          />

          <OrdersBoard
            orders={done}
            title='Finalizado'
          />
        </>
      )}
    </Wrapper>
  );
}
