import { useCancelOrder } from 'data/features/orders/cancel-order/useCancelOrder';
import { useShowOrder } from 'data/features/orders/show-order/useShowOrder';

import { GhostButton } from 'presentation/components/Button';
import { ModalActions, ModalContainer } from 'presentation/components/Modal';

import Currency from 'shared/utils/currency';
import Datetime from 'shared/utils/date';

import { type IArchivedOrderModalProps } from './ArchivedOrderModal.types';

import {
  ModalBody,
  OrderInfo,
  OrderProducts,
  Product,
  ProductInfo,
  ProductsList,
  TotalPrice
} from './ArchivedOrderModal.styles';

export function ArchivedOrderModal({
  order,
  visible,
  onClose
}: IArchivedOrderModalProps): JSX.Element | null {
  const { totalPrice } = useShowOrder(order);
  const { handleCancelOrder, isCancelOrderLoading } = useCancelOrder(
    order?._id,
    order?.table,
    onClose
  );

  if (!order) {
    return null;
  }

  return (
    <ModalContainer
      title={`Mesa ${order.table}`}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalBody>
        <OrderInfo>
          <div>
            <p>Nome do cliente</p>
            <strong>{order.client_name}</strong>
          </div>

          <div>
            <p>Data do pedido</p>
            <strong>{Datetime.format(order.created_at)}</strong>
          </div>
        </OrderInfo>

        <OrderProducts>
          <p>Itens</p>

          <ProductsList>
            {order.products.map(({ _id, product, quantity }) => (
              <Product key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={order.products[0].product.name}
                />

                <ProductInfo>
                  <span>{quantity}x</span>

                  <div>
                    <h4>{product.name}</h4>
                    <span>{Currency.format(product.price)}</span>
                  </div>
                </ProductInfo>
              </Product>
            ))}
          </ProductsList>

          <TotalPrice>
            <span>Total</span>
            <h4>{Currency.format(totalPrice)}</h4>
          </TotalPrice>
        </OrderProducts>
      </ModalBody>

      <ModalActions>
        <GhostButton
          text='Excluir Registro'
          onClick={handleCancelOrder}
          disabled={isCancelOrderLoading}
        />
      </ModalActions>
    </ModalContainer>
  );
}
