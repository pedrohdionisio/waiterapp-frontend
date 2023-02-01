import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/Auth/Auth.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;
