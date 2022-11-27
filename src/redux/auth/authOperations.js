import { createAsyncThunk } from '@reduxjs/toolkit';
import { refreshUserApi, registerUserApi } from 'utils/firebaseApi';
import { loginUserApi } from './../../utils/firebaseApi';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const data = await registerUserApi(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const data = await loginUserApi(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const { idToken } = thunkAPI.getState().auth;
    try {
      const data = await refreshUserApi(idToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
