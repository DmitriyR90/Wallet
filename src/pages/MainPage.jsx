import { useState } from 'react';
import { TransactionForm } from '../components/TransactionForm/TransactionForm';
import { NavButtons } from '../components/NavButtons/NavButtons';
import Header from '../components/Header/Header';
import { Categories } from 'components/Categories/Categories';

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
