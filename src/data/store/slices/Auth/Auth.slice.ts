import { createSlice } from '@reduxjs/toolkit';

import { UserType } from '../../../../shared/types/User';

import { IAuthSlice } from './AuthSlice.types';

const initialState: IAuthSlice = {
  user: {} as UserType,
  isAuthenticated: !!JSON.parse(window.localStorage.getItem('token')!),
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {} as UserType;

      window.localStorage.removeItem('token');
    },
  },
});

export const { logout, setUser } = slice.actions;

export default slice.reducer;
