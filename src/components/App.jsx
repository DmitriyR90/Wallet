import { useEffect, useState } from 'react';
// import { Component } from 'react';
import { MainPage } from '../pages/MainPage';
import { TransactionHistoryPage } from '../pages/TransactionHistoryPage/TransactionHistoryPage';
import { Routes, Route, Navigate } from 'react-router-dom';


export const App = () => {
  const [activePage, setActivePage] = useState('main');
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  // const changePage = (activePage = 'main') => {
  //   setActivePage(activePage);
  // };

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

  return (
    <Routes>
      <Route
        path="/transaction/:transType"
        element={<MainPage addTransaction={addTransaction} />}
      />
      <Route path="/history/:transType" element={<TransactionHistoryPage />} />
      <Route path='*' element={<Navigate to='/transaction/expense' /> }/>
    </Routes>
  );
};

