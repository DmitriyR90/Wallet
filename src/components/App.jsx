import { useState } from 'react';
// import { Component } from 'react';
import { MainPage } from './MainPage/MainPage';
import { TransactionHistoryPage } from './TransactionHistoryPage/TransactionHistoryPage';

export const App = () => {
  const [activePage, setActivePage] = useState('main');
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  const changePage = (activePage = 'main') => {
    setActivePage(activePage);
  };

  return (
    <>
      {activePage === 'main' && <MainPage changePage={changePage} />}
      {activePage === 'income' && (
        <TransactionHistoryPage changePage={changePage} />
      )}
      {activePage === 'expense' && (
        <TransactionHistoryPage changePage={changePage} />
      )}
    </>
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
