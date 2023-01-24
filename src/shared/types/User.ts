export type UserRoleType = 'ADMIN' | 'CHEF' | 'WAITER';

export type UserType = {
  name: string;
  email: string;
  role: UserRoleType,
};
