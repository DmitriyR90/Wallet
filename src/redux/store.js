import { configureStore } from '@reduxjs/toolkit';
import { transactionReducer } from './transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});
