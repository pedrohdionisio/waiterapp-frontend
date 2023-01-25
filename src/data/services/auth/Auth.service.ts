import HttpClient from '../../clients/HttpClient';

import {
  IAuthenticateUserPayload,
  IAuthenticateUserResponse,
  IGetAuthenticatedUserResponse,
} from './AuthService.type';

class AuthService {
  private httpClient = new HttpClient('http://localhost:3001/');

  async authenticateUser(payload: IAuthenticateUserPayload) {
    const user = await this.httpClient.post<
      IAuthenticateUserResponse,
      IAuthenticateUserPayload
    >('/login', payload);

    return user;
  }

  async getAuthenticatedUser() {
    const headers = {
      Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token')!)}`,
    };

    const user = await this.httpClient.get<
      IGetAuthenticatedUserResponse
    >('/users/authenticated', { headers });

    return user;
  }
}
export default new AuthService();
