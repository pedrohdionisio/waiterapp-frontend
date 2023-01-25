import { createAsyncThunk } from '@reduxjs/toolkit';

import AuthService from '../../../services/auth/Auth.service';
import { IAuthenticateUserPayload } from '../../../services/auth/AuthService.type';

export const authenticateUser = createAsyncThunk(
  'auth/authenticateUser',
  async (payload: IAuthenticateUserPayload) => {
    const response = await AuthService.authenticateUser(payload);

    return response.data;
  },
);

export const getAuthenticatedUser = createAsyncThunk(
  'auth/getAuthenticatedUser',
  async () => {
    const response = await AuthService.getAuthenticatedUser();

    return response.data;
  },
);
