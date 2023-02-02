/* eslint-disable no-underscore-dangle */
import { ManageOrder } from '../../features/ManageOrder/ManageOrder.feature';
import {
  Board, BoardCard, BoardHeader, Wrapper,
} from './OrdersBoard.styles';
import { IOrdersBoardProps } from './OrdersBoard.types';
import { useOrdersBoard } from './useOrdersBoard';

export function OrdersBoard({ orders, title }: IOrdersBoardProps) {
  const {
    selectedOrder,
    isOrderModalVisible,
    handleCloseModal,
    handleOpenModal,
  } = useOrdersBoard();

  return (
    <Wrapper>
      <Board>
        <BoardHeader>
          <h4>{title}</h4>
          <span>{orders?.length}</span>
        </BoardHeader>

        {orders?.map((order) => (
          <BoardCard key={order._id} onClick={() => handleOpenModal(order)}>
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
