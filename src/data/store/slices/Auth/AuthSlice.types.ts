export interface IAuthSlice {
  token: string | null;
  user: {
    name: string;
    email: string;
    role: string;
  }
  isLoading: boolean;
  isAuthenticated: boolean;
}
