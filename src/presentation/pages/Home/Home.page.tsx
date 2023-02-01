import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import OrdersService from '../../../data/services/orders/Orders.service';
import { OrderType } from '../../../shared/types/Order';
import { Loader } from '../../components/Loader/Loader.component';
import { OrdersBoard } from '../../components/OrdersBoard/OrdersBoard.component';
import { LoaderContainer, Wrapper } from './Home.styles';

export function Home() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  const loadOrders = useCallback(async () => {
    try {
      const loadedOrders = await OrdersService.listOrders();

      setOrders(loadedOrders);
    } catch (err) {
      toast.error('Ocorreu um erro ao carregar os pedidos');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

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
