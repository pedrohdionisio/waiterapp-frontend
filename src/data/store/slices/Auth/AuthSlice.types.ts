export interface IAuthSlice {
  token: string | null;
  user: {
    name: string;
    email: string;
    role: string;
  }
  isAuthenticated: boolean;
}
