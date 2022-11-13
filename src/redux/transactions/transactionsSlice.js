import { createSlice } from '@reduxjs/toolkit';
import {
  addExpenseTransaction,
  addIncomeTransaction,
} from './transactionsOperations';
console.dir(addIncomeTransaction.fulfilled());

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// addExpenseTransaction();
const initialState = {
  income: [],
  expense: [],
  isLoading: false,
  erorr: null,
};
const transactionSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  extraReducers: {
    [addIncomeTransaction.pending]: handlePending,
    [addIncomeTransaction.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.erorr = null;
      state.income.push(payload);
    },
    [addIncomeTransaction.rejected]: handleRejected,
    //
    [addExpenseTransaction.pending]: handlePending,
    [addExpenseTransaction.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.erorr = null;
      state.expense.push(payload);
    },
    [addExpenseTransaction.rejected]: handleRejected,
  },
});

export const transactionReducer = transactionSlice.reducer;
