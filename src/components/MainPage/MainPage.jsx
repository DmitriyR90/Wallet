import { TransactionForm } from '../TransactionForm/TransactionForm';
import { NavButtons } from '../NavButtons/NavButtons';
import Header from '../Header/Header';
import { Categories } from 'components/Categories/Categories';
import { useState } from 'react';

export const MainPage = ({ changePage, addTransaction }) => {
  const [isOpenCategories, setisOpenCategories] = useState(false);


  return (
isOpenCategories ? <Categories/> :
    <>
      <Header />
      <TransactionForm addTransaction={addTransaction} />
      <NavButtons changePage={changePage} />
    </>
  );
};

