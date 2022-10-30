import { TransactionForm } from '../TransactionForm/TransactionForm';
import { NavButtons } from '../NavButtons/NavButtons';
import Header from '../Header/Header';
import { Categories } from 'components/Categories/Categories';
import { useState } from 'react';

export const MainPage = ({ addTransaction }) => {
  const [isOpenCategories, setisOpenCategories] = useState(false);

  const toggleCategory = () => {
    setisOpenCategories(prevState => !prevState);
  };

  return isOpenCategories ? (
    <Categories closeCategory={toggleCategory} />
  ) : (
    <>
      <Header title={'Журнал витрат'} />
      <TransactionForm
        addTransaction={addTransaction}
        openCategory={toggleCategory}
      />
      <NavButtons />
    </>
  );
};
