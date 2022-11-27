import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, refreshUser } from './authOperations';

const initialState = {
  //   isAuth: false,
  isLoading: false,
  error: null,
  localId: null,
  email: null,
  idToken: JSON.parse(localStorage.getItem('token')) ?? null,
  refreshToken: null,
};

const setToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending]: state => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (_, { payload }) => {
      setToLS('token', payload.idToken);
      return {
        isLoading: false,
        error: null,
        ...payload,
      };
    },
    [registerUser.rejected]: (state, payload) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: state => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (_, { payload }) => {
      setToLS('token', payload.idToken);
      return {
        isLoading: false,
        error: null,
        ...payload,
      };
    },
    [loginUser.rejected]: (state, payload) => {
      state.isLoading = false;
      state.error = payload;
    },
    [refreshUser.pending]: state => {
      state.isLoading = true;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: null,
        ...payload,
      };
    },
    [refreshUser.rejected]: (state, payload) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
