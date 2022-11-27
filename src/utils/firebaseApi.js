// https://wallet-30cf8-default-rtdb.firebaseio.com/transactions/expense.json
// https://wallet-30cf8-default-rtdb.firebaseio.com/transactions/income.json

import axios from 'axios';

const API_KEY = 'AIzaSyDaslMzwq9LzUIi_hPej1pmRN9arGw0z0Y';
const BASE_URL = {
  AUTH: 'https://identitytoolkit.googleapis.com/v1',
  DB: 'https://wallet-9f007-default-rtdb.firebaseio.com/',
};

export const addTransactionApi = async ({
  transType,
  transaction,
  localId,
  idToken,
}) => {
  try {
    const response = await axios.post(
      `/users/${localId}/transactions/${transType}.json`,
      transaction,
      {
        baseURL: BASE_URL.DB,
        params: {
          auth: idToken,
        },
      }
    );
    const newTransaction = {
      id: response.data.name,
      ...transaction,
    };
    return newTransaction;
  } catch (error) {
    throw error;
  }
};

export const registerUserApi = async userData => {
  try {
    const { data } = await axios.post(
      '/accounts:signUp',
      {
        ...userData,
        returnSecureToken: true,
      },
      {
        baseURL: BASE_URL.AUTH,
        params: {
          key: API_KEY,
        },
      }
    );
    console.log(data);
    const { localId, email, idToken, refreshToken } = data;
    return { localId, email, idToken, refreshToken };
  } catch (error) {
    throw error;
  }
};

export const loginUserApi = async userData => {
  try {
    const { data } = await axios.post(
      '/accounts:signInWithPassword',
      {
        ...userData,
        returnSecureToken: true,
      },
      {
        baseURL: BASE_URL.AUTH,
        params: {
          key: API_KEY,
        },
      }
    );
    console.log(data);
    const { localId, email, idToken, refreshToken } = data;
    return { localId, email, idToken, refreshToken };
  } catch (error) {
    throw error;
  }
};

/**
 * curl 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]' \
-H 'Content-Type: application/json' --data-binary '{"idToken":"[FIREBASE_ID_TOKEN]"}'
 */

export const refreshUserApi = async idToken => {
  try {
    const { data } = await axios.post(
      '/accounts:lookup',
      {
        idToken,
      },
      {
        baseURL: BASE_URL.AUTH,
        params: { key: API_KEY },
      }
    );
    console.log(data);
    const { localId, email } = data.users[0];

    return { localId, email };
  } catch (error) {
    console.dir(error);
    throw error;
  }
};
