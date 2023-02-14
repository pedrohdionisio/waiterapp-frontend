import { UserType } from 'shared/types/User';

export type AuthenticateUserPayloadType = Pick<UserType, 'email' | 'password'>;
