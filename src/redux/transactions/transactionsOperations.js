import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTransactionApi } from 'utils/firebaseApi';
export const addIncomeTransaction = createAsyncThunk(
  'transactions/income/add',
  async (transaction, thunkAPI) => {
    const { localId, idToken } = thunkAPI.getState().auth;
    try {
      const transactionData = await addTransactionApi({
        transType: 'income',
        transaction,
        localId,
        idToken,
      });
      return transactionData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExpenseTransaction = createAsyncThunk(
  'transactions/expense/add',
  async (transaction, thunkAPI) => {
    const { localId, idToken } = thunkAPI.getState().auth;
    try {
      const transactionData = await addTransactionApi({
        transType: 'expense',
        transaction,
        localId,
        idToken,
      });
      return transactionData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
