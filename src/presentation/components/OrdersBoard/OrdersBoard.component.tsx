/* eslint-disable no-underscore-dangle */

import { ManageOrderModal } from 'presentation/pages/Home/components/ManageOrderModal';

import { useOrdersBoard } from './useOrdersBoard';

import { type IOrdersBoardProps } from './OrdersBoard.types';

import { Board, BoardCard, BoardHeader, Wrapper } from './OrdersBoard.styles';

export function OrdersBoard({ orders, title }: IOrdersBoardProps): JSX.Element {
  const {
    selectedOrder,
    isOrderModalVisible,
    handleCloseModal,
    handleOpenModal
  } = useOrdersBoard();

  return (
    <Wrapper>
      <Board>
        <BoardHeader>
          <h4>{title}</h4>
          <span>{orders?.length}</span>
        </BoardHeader>

        {orders?.map(order => (
          <BoardCard
            key={order._id}
            onClick={() => {
              handleOpenModal(order);
            }}
          >
            <strong>{`Mesa ${order.table}`}</strong>
            <span>
              {`${order.products.length} ${
                order.products.length === 1 ? 'item' : 'itens'
              }`}
            </span>
          </BoardCard>
        ))}
      </Board>

      <ManageOrderModal
        order={selectedOrder!}
        onClose={handleCloseModal}
        visible={isOrderModalVisible}
      />
    </Wrapper>
  );
}
