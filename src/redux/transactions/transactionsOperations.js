import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTransactionApi } from 'utils/firebaseApi';
export const addIncomeTransaction = createAsyncThunk(
  'transactions/income/add',
  async (transaction, thunkAPI) => {
    try {
      const transactionData = await addTransactionApi('income', transaction);
      return transactionData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExpenseTransaction = createAsyncThunk(
  'transactions/expense/add',
  async (transaction, thunkAPI) => {
    try {
      const transactionData = await addTransactionApi('expense', transaction);
      return transactionData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
