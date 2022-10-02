import { TransactionForm } from '../TransactionForm/TransactionForm';
import { NavButtons } from '../NavButtons/NavButtons';
import Header from '../Header/Header';

export const MainPage = ({ changePage }) => {
  
  return (
    <>
      <Header />
      <TransactionForm />
      <NavButtons changePage={changePage}/>
    </>
  );
};
