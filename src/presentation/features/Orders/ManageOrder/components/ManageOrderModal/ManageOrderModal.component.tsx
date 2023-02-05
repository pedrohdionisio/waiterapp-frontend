import Currency from 'shared/utils/currency';

import { Modal } from 'presentation/components/Modal/Modal.component';

import { useManageOrder } from '../../useManageOrder';

import {
  ModalBody,
  OrderProducts,
  OrderStatus,
  Product,
  ProductInfo,
  ProductsList,
  TotalPrice,
} from './ManageOrderModal.styles';
import { IManageOrder } from './ManageOrderModal.types';

export function ManageOrderModal({ order, visible, onClose }: IManageOrder) {
  if (!order) {
    return null;
  }

  const { totalPrice } = useManageOrder(order);

  return (
    <Modal
      title={`Mesa ${order.table}`}
      visible={visible}
      primaryActionText="Concluir pedido"
      secondaryActionText="Cancelar pedido"
      action={() => {}}
      onClose={onClose}
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
    </Modal>
  );
}
