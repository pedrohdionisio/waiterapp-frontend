import { OrderType } from '../../../shared/types/Order';
import HttpClient from '../../clients/HttpClient';

class OrdersService {
  private httpClient = new HttpClient('http://localhost:3001/');

  async listOrders() {
    const headers = {
      Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token')!)}`,
    };

    const { data } = await this.httpClient.get<OrderType[]>('/orders', { headers });

    return data;
  }
}
export default new OrdersService();
