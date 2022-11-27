import { configureStore } from '@reduxjs/toolkit';
import { transactionReducer } from './transactions/transactionsSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    auth: authReducer,
  },
});
