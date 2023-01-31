import { Modal } from '../../components/Modal/Modal.component';
import {
  ModalBody,
  OrderProducts,
  OrderStatus,
  Product,
  ProductInfo,
  ProductsList,
  TotalPrice,
} from './ManageOrder.styles';
import { IManageOrder } from './ManageOrder.types';

export function ManageOrder({ order, visible, onClose }: IManageOrder) {
  const orderStatus = {
    WAITING: 'Na fila de espera',
    IN_PRODUCTION: 'Em produção',
    DONE: 'Finalizado',
  };

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
          <strong>{orderStatus[order.status]}</strong>
        </OrderStatus>

        <OrderProducts>
          <p>Itens</p>

          <ProductsList>
            <Product>
              <img
                src={`http://localhost:3001/uploads/${order.products[0].product.imagePath}`}
                alt={order.products[0].product.name}
              />

              <ProductInfo>
                <span>
                  {order.products[0].quantity}
                  x
                </span>

                <div>
                  <h4>{order.products[0].product.name}</h4>
                  <span>R$ 40,00</span>
                </div>
              </ProductInfo>
            </Product>
          </ProductsList>

          <TotalPrice>
            <span>Total</span>
            <h4>R$ 1200,00</h4>
          </TotalPrice>
        </OrderProducts>
      </ModalBody>
    </Modal>
  );
}
