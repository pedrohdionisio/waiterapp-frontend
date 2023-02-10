import { OrderStatusType, OrderType } from 'shared/types/Order';
import HttpClient from 'data/clients/HttpClient';

class OrdersService {
  private httpClient = new HttpClient('http://localhost:3001/');

  async listOrders() {
    const headers = {
      Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token')!)}`,
    };

    const { data } = await this.httpClient.get<OrderType[]>('/orders', { headers });

    return data;
  }

  async cancelOrder(id: string) {
    const headers = {
      Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token')!)}`,
    };

    const { data } = await this.httpClient.delete(`/orders/${id}`, { headers });

    return data;
  }

  async changeOrderStatus(id: string, status: OrderStatusType) {
    const headers = {
      Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token')!)}`,
    };

    const { data } = await this.httpClient.patch(`/orders/${id}`, { status }, { headers });

    return data;
  }
}
export default new OrdersService();
