import { TransactionForm } from '../TransactionForm/TransactionForm';
import { NavButtons } from '../NavButtons/NavButtons';
import Header from '../Header/Header';

export const MainPage = ({ changePage, addTransaction }) => {
  return (
    <>
      <Header />
      <TransactionForm addTransaction={addTransaction} />
      <NavButtons changePage={changePage} />
    </>
  );
};
