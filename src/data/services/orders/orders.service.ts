import { type OrderStatusType, type OrderType } from 'shared/types/Order';

import api from '../api';

class OrdersService {
  async listOrders(): Promise<OrderType[]> {
    const { data } = await api.get<OrderType[]>('/orders');

    return data;
  }

  async cancelOrder(id: string): Promise<void> {
    const { data } = await api.delete(`/orders/${id}`);

    return data;
  }

  async changeOrderStatus(id: string, status: OrderStatusType): Promise<void> {
    const { data } = await api.patch(`/orders/${id}`, { status });

    return data;
  }
}
export default new OrdersService();
