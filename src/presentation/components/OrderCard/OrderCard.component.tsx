import { useState } from 'react';
import { ManageOrder } from '../../features/ManageOrder/ManageOrder.feature';
import { Wrapper } from './OrderCard.styles';
import { IOrderCardProps } from './OrderCard.types';

export function OrderCard({ order }: IOrderCardProps) {
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);

  return (
    <>
      <Wrapper onClick={() => setIsOrderModalVisible(true)}>
        <strong>{`Mesa ${order.table}`}</strong>
        <span>{`${order.products.length} itens`}</span>
      </Wrapper>

      <ManageOrder
        order={order}
        visible={isOrderModalVisible}
        onClose={() => setIsOrderModalVisible(false)}
      />
    </>
  );
}
