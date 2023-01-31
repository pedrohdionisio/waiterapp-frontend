import orders from '../../../shared/mocks/orders';
import { OrderCard } from '../../components/OrderCard/OrderCard.component';
import { Board, BoardHeader, Wrapper } from './Home.styles';

export function Home() {
  return (
    <Wrapper>
      <Board>
        <BoardHeader>
          <h4>Fila de Espera</h4>
          <span>1</span>
        </BoardHeader>

        <OrderCard order={orders[0]} />
      </Board>

      <Board>
        <BoardHeader>
          <h4>Fila de Espera</h4>
          <span>1</span>
        </BoardHeader>

        <OrderCard order={orders[0]} />
      </Board>

      <Board>
        <BoardHeader>
          <h4>Fila de Espera</h4>
          <span>1</span>
        </BoardHeader>

        <OrderCard order={orders[0]} />
      </Board>
    </Wrapper>
  );
}
