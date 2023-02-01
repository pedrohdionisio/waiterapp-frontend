import HttpClient from '../../clients/HttpClient';

import {
  IAuthenticateUserPayload,
  IAuthenticateUserResponse,
  IGetAuthenticatedUserResponse,
} from './AuthService.type';

class AuthService {
  private httpClient = new HttpClient('http://localhost:3001/');

  async authenticateUser(payload: IAuthenticateUserPayload) {
    const { data } = await this.httpClient.post<
      IAuthenticateUserResponse,
      IAuthenticateUserPayload
    >('/login', payload);

    return data;
  }

  async getAuthenticatedUser() {
    const headers = {
      Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token')!)}`,
    };

    const { data } = await this.httpClient.get<
      IGetAuthenticatedUserResponse
    >('/users/authenticated', { headers });

    return data;
  }
}
export default new AuthService();
