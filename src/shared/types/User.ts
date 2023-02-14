export type UserRoleType = 'ADMIN' | 'CHEF' | 'WAITER';

export type UserType = {
  name: string;
  email: string;
  type: UserRoleType,
  password?: string;
};

export interface IAuthenticatedUser {
  token: string;
  user: UserType;
  isAuthenticated: boolean;
}
