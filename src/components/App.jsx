import { useEffect, useState } from 'react';

import { MainPage } from '../pages/MainPage';
import { TransactionHistoryPage } from '../pages/TransactionHistoryPage/TransactionHistoryPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from './../pages/LoginPage';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuth } from './../redux/auth/authSelectors';
import { refreshUser } from './../redux/auth/authOperations';

const getFromLS = (key, initialValue) => {
  return JSON.parse(localStorage.getItem(key)) ?? initialValue;
};

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
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

  useEffect(() => {
    isAuth && dispatch(refreshUser());
  }, [dispatch, isAuth]);

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route
            path="/transaction/:transType"
            element={
              <MainPage addCategory={addCategory} categories={categories} />
            }
          />
          <Route
            path="/history/:transType"
            element={<TransactionHistoryPage />}
          />
          <Route path="*" element={<Navigate to="/transaction/expense" />} />
        </>
      ) : (
        <>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};
