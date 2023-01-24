import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/Auth/Auth.slice';

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActionPaths: ['payload.headers', 'payload.config', 'payload.request'],
    },
  }),
  reducer: {
    auth: authReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;
