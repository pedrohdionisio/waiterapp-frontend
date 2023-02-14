import HttpClient from 'data/clients/HttpClient';
import { IAuthenticatedUser } from 'shared/types/User';
import AuthMapper from './Auth.mapper';
import { AuthenticateUserPayloadType } from './AuthService.type';

class AuthService {
  private httpClient = new HttpClient('http://localhost:3001/');

  async authenticateUser(payload: AuthenticateUserPayloadType) {
    const { data } = await this.httpClient.post<
      IAuthenticatedUser,
      AuthenticateUserPayloadType
    >('/login', AuthMapper.toPersistence(payload));

    return AuthMapper.toDomain(data);
  }

  async getAuthenticatedUser() {
    const headers = {
      Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token')!)}`,
    };

    const { data } = await this.httpClient.get<
      IAuthenticatedUser
    >('/users/authenticated', { headers });

    return AuthMapper.toDomain(data);
  }
}
export default new AuthService();
