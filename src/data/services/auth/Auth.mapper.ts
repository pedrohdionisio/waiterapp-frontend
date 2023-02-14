import { IAuthenticatedUser } from 'shared/types/User';
import { AuthenticateUserPayloadType } from './AuthService.type';

class AuthMapper {
  toDomain(persistenceUser: IAuthenticatedUser) {
    return {
      isAuthenticated: persistenceUser.isAuthenticated,
      token: persistenceUser.token,
      user: {
        name: persistenceUser.user.name,
        email: persistenceUser.user.email,
        type: persistenceUser.user.type,
      },
    };
  }

  toPersistence(domainUser: AuthenticateUserPayloadType):
    AuthenticateUserPayloadType {
    return {
      email: domainUser.email,
      password: domainUser.password,
    };
  }
}

export default new AuthMapper();
