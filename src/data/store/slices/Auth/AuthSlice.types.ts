export interface IAuthSlice {
  user: {
    name: string;
    email: string;
    type: string;
  }
  isAuthenticated: boolean;
}
