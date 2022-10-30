import { useState } from 'react';
import { TransactionForm } from '../components/TransactionForm/TransactionForm';
import { NavButtons } from '../components/NavButtons/NavButtons';
import Header from '../components/Header/Header';
import { Categories } from 'components/Categories/Categories';

export const MainPage = ({ addTransaction, addCategory, categories }) => {
  const [isOpenCategories, setisOpenCategories] = useState(false);
  const [category, setCategory] = useState('Різне');

  const toggleCategory = () => {
    setisOpenCategories(prevState => !prevState);
  };

  return isOpenCategories ? (
    <Categories
      closeCategory={toggleCategory}
      addCategory={addCategory}
      categories={categories}
      changeCategory={setCategory}
    />
  ) : (
    <>
      <Header title={'Журнал витрат'} />
      <TransactionForm
        addTransaction={addTransaction}
        openCategory={toggleCategory}
        newCategory={category}
      />
      <NavButtons />
    </>
  );
};
