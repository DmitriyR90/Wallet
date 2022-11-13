// https://wallet-30cf8-default-rtdb.firebaseio.com/transactions/expense.json
// https://wallet-30cf8-default-rtdb.firebaseio.com/transactions/income.json

import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-30cf8-default-rtdb.firebaseio.com';

export const addTransactionApi = async (transactionType, transaction) => {
  try {
    const response = await axios.post(
      `transactions/${transactionType}.json`,
      transaction
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
