import Currency from 'shared/utils/currency';

import { useShowOrder } from 'data/features/Orders/ShowOrder/useShowOrder';
import { useCancelOrder } from 'data/features/Orders/CancelOrder/useCancelOrder';
import { useChangeOrderStatus } from 'data/features/Orders/ChangeOrderStatus/useChangeOrderStatus';

import { ModalContainer } from 'presentation/components/Modal/ModalContainer/ModalContainer.component';
import { ModalActions } from 'presentation/components/Modal/ModalActions/ModalActions.component';
import { GhostButton } from 'presentation/components/Button/GhostButton/GhostButton.component';
import { DefaultButton } from 'presentation/components/Button/DefaultButton/DefaultButton.component';

import { IManageOrder } from './ManageOrderModal.types';
import {
  ModalBody,
  OrderProducts,
  OrderStatus,
  Product,
  ProductInfo,
  ProductsList,
  TotalPrice,
} from './ManageOrderModal.styles';

export function ManageOrderModal({ order, visible, onClose }: IManageOrder) {
  if (!order) {
    return null;
  }

  const { totalPrice } = useShowOrder(order);
  const { handleCancelOrder, isCancelOrderLoading } = useCancelOrder(
    order._id,
    order.table,
    onClose,
  );

  const { handleChangeOrderStatus, isChangeStatusLoading } = useChangeOrderStatus(
    order._id,
    order.table,
    order.status,
    onClose,
  );

  return (
    <ModalContainer
      title={`Mesa ${order.table}`}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalBody>
        <OrderStatus>
          <p>Status do Pedido</p>
          <strong>
            {order.status === 'WAITING' && 'Em espera'}
            {order.status === 'IN_PRODUCTION' && 'Em preparação'}
            {order.status === 'DONE' && 'Pronto'}
          </strong>
        </OrderStatus>

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
                  <span>
                    {quantity}
                    x
                  </span>

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

      {order.status !== 'DONE' && (
      <ModalActions>
        <GhostButton
          text="Cancelar pedido"
          onClick={handleCancelOrder}
          disabled={isChangeStatusLoading || isCancelOrderLoading}
        />

        <DefaultButton
          onClick={handleChangeOrderStatus}
          text={
              order.status === 'WAITING'
                ? 'Mover para produção'
                : 'Concluir pedido'
            }
          isLoading={isChangeStatusLoading || isCancelOrderLoading}
        />
      </ModalActions>
      )}
    </ModalContainer>
  );
}
