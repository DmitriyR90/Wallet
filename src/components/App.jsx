import { useEffect, useState } from 'react';

import { MainPage } from '../pages/MainPage';
import { TransactionHistoryPage } from '../pages/TransactionHistoryPage/TransactionHistoryPage';
import { Routes, Route, Navigate } from 'react-router-dom';

const getFromLS = (key, initialValue) => {
  return JSON.parse(localStorage.getItem(key)) ?? initialValue;
};

export const App = () => {
  const [income, setIncome] = useState(getFromLS('income', []));
  const [expense, setExpense] = useState(getFromLS('expense', []));
  const [incomeCategories, setIncomeCategories] = useState(
    getFromLS('incomeCategories', [])
  );
  const [expenseCategories, setExpenseCategories] = useState(
    getFromLS('expenseCategories', [])
  );

  const addCategory = (category, transType) => {
    if (transType === 'income') {
      setIncomeCategories(prevState => [...prevState, category]);
    }
    if (transType === 'expense') {
      setExpenseCategories(prevState => [...prevState, category]);
    }
  };

  const addTransaction = transaction => {
    const { transType } = transaction;

    transType === 'income' &&
      setIncome(prevState => [...prevState, transaction]);
    transType === 'expense' &&
      setExpense(prevState => [...prevState, transaction]);
  };

  useEffect(() => {
    localStorage.setItem('income', JSON.stringify(income));
  }, [income]);
  useEffect(() => {
    localStorage.setItem('expense', JSON.stringify(expense));
  }, [expense]);

  const categories = {
    income: incomeCategories,
    expense: expenseCategories,
  };

  useEffect(() => {
    localStorage.setItem('incomeCategories', JSON.stringify(incomeCategories));
  }, [incomeCategories]);
  useEffect(() => {
    localStorage.setItem(
      'expenseCategories',
      JSON.stringify(expenseCategories)
    );
  }, [expenseCategories]);

  return (
    <Routes>
      <Route
        path="/transaction/:transType"
        element={
          <MainPage
            addTransaction={addTransaction}
            addCategory={addCategory}
            categories={categories}
          />
        }
      />
      <Route path="/history/:transType" element={<TransactionHistoryPage />} />
      <Route path="*" element={<Navigate to="/transaction/expense" />} />
    </Routes>
  );
};
