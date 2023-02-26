/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type Control,
  type FieldErrors,
  type UseFormHandleSubmit
} from 'react-hook-form';

import { type IAuthenticateUserPayload } from 'data/services/auth/authService.type';

export interface IUseSignIn {
  errors: FieldErrors<IAuthenticateUserPayload>;
  control: Control<IAuthenticateUserPayload, any>;
  isLoading: boolean;
  handleSubmit: UseFormHandleSubmit<IAuthenticateUserPayload>;
  handleSignInUser: (params: IAuthenticateUserPayload) => Promise<void>;
}
