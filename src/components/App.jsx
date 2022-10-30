import { useEffect, useState } from 'react';
// import { Component } from 'react';
import { MainPage } from './MainPage/MainPage';
import { TransactionHistoryPage } from './TransactionHistoryPage/TransactionHistoryPage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  const [activePage, setActivePage] = useState('main');
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  // const changePage = (activePage = 'main') => {
  //   setActivePage(activePage);
  // };

  const addTransaction = transaction => {
    const { transactionType } = transaction;

    transactionType === 'income' &&
      setIncome(prevState => [...prevState, transaction]);
    transactionType === 'expense' &&
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
        path="/transaction"
        element={<MainPage addTransaction={addTransaction} />}
      />
      <Route path="/history/:type" element={<TransactionHistoryPage />} />
    </Routes>
  );
};

/*
export class App extends Component {
 
  state = {
    activePage: "main",
  }

  changePage = (activePage="main") => {
    this.setState({
      activePage: activePage
    })
  }

  render() {
    const { activePage } = this.state
    return <>

      {activePage === "main" && <MainPage changePage={this.changePage} />}
      {activePage === "income" && <TransactionHistoryPage changePage={this.changePage}/>}
      {activePage === "expense" && <TransactionHistoryPage changePage={this.changePage}/>}
  
    </>;
    }
};
*/
