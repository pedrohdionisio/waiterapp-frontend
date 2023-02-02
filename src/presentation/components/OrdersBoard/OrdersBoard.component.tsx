import { useState } from 'react';
import { OrderType } from '../../../shared/types/Order';
import { ManageOrder } from '../../features/ManageOrder/ManageOrder.feature';
import {
  Board, BoardCard, BoardHeader, Wrapper,
} from './OrdersBoard.styles';
import { IOrdersBoardProps } from './OrdersBoard.types';

export function OrdersBoard({ orders, title }: IOrdersBoardProps) {
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);

  function handleOpenModal(order: OrderType) {
    setSelectedOrder(order);
    setIsOrderModalVisible(true);
  }

  function handleCloseModal() {
    setSelectedOrder(null);
    setIsOrderModalVisible(false);
  }

  return (
    <Wrapper>
      <Board>
        <BoardHeader>
          <h4>{title}</h4>
          <span>{orders?.length}</span>
        </BoardHeader>

        {orders?.map((order) => (
          <BoardCard onClick={() => handleOpenModal(order)}>
            <strong>{`Mesa ${order.table}`}</strong>
            <span>
              {`${order.products.length} ${
                order.products.length === 1 ? 'item' : 'itens'
              }`}
            </span>
          </BoardCard>
        ))}
      </Board>

      <ManageOrder
        order={selectedOrder!}
        onClose={handleCloseModal}
        visible={isOrderModalVisible}
      />
    </Wrapper>
  );
}
