import { AxiosResponse } from 'axios';
import HttpClient from '../../clients/HttpClient';
import { IAuthenticateUserPayload, IAuthenticateUserResponse } from './AuthService.type';

class AuthService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async authenticateUser(payload: IAuthenticateUserPayload):
  Promise<AxiosResponse<IAuthenticateUserResponse>> {
    const user = await this.httpClient.post('/login', payload);

    return user;
  }
}
export default new AuthService();
