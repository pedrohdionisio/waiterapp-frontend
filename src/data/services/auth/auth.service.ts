import api from '../api';

import {
  type IAuthenticateUserPayload,
  type IAuthenticateUserResponse,
  type IGetAuthenticatedUserResponse
} from './authService.type';

class AuthService {
  async authenticateUser(
    payload: IAuthenticateUserPayload
  ): Promise<IAuthenticateUserResponse> {
    const { data } = await api.post<IAuthenticateUserResponse>(
      '/login',
      payload
    );

    return data;
  }

  async getAuthenticatedUser(): Promise<IGetAuthenticatedUserResponse> {
    const { data } = await api.get<IGetAuthenticatedUserResponse>(
      '/users/authenticated'
    );

    return data;
  }
}
export default new AuthService();
