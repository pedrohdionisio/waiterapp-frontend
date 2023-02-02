export interface IAuthSlice {
  user: {
    name: string;
    email: string;
    role: string;
  }
  isAuthenticated: boolean;
}
