import { createSlice } from '@reduxjs/toolkit';

import { UserType } from '../../../../shared/types/User';

import { IAuthSlice } from './AuthSlice.types';
import { authenticateUser, getAuthenticatedUser } from './AuthThunks';

const initialState: IAuthSlice = {
  token: null,
  user: {} as UserType,
  isLoading: false,
  isAuthenticated: !!JSON.parse(window.localStorage.getItem('token')!),
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = {} as UserType;

      window.localStorage.removeItem('token');
    },
  },
  extraReducers(builder) {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;

      window.localStorage.setItem('token', JSON.stringify(state.token));
    });
    builder.addCase(authenticateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authenticateUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getAuthenticatedUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isLoading = false;
    });
    builder.addCase(getAuthenticatedUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAuthenticatedUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { logout } = slice.actions;

export default slice.reducer;
