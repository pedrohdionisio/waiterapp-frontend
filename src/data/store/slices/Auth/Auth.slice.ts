/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { UserType } from '../../../../shared/types/User';
import { IAuthSlice } from './AuthSlice.types';

import AuthService from '../../../services/auth/Auth.service';
import { IAuthenticateUserPayload } from '../../../services/auth/AuthService.type';

export const authenticateUser = createAsyncThunk(
  'auth/authenticateUser',
  async (payload: IAuthenticateUserPayload) => {
    const response = await AuthService.authenticateUser(payload);

    return response.data;
  },
);

const initialState: IAuthSlice = {
  token: null,
  user: {} as UserType,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoading = false;
    });
    builder.addCase(authenticateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authenticateUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default slice.reducer;
