import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { LabelInput } from 'components/LabelInput/LabelInput';
import { Section } from 'components/Section/Section';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Categories = ({
  closeCategory,
  addCategory,
  categories,
  changeCategory,
}) => {
  const [category, setCategory] = useState('');
  const { transType } = useParams();

  const onInput = event => {
    setCategory(event.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const newCategory = { id: Date.now(), category };
    addCategory(newCategory, transType);
    setCategory('');
  };

  const chooseCategory = category => {
    changeCategory(category);
    closeCategory();
  };

  const categoriesList = categories[transType];
  console.log(categoriesList);
  return (
    <>
      <Header title={'Категорії'} onClick={closeCategory} />
      <Section>
        <Container>
          <ul>
            {categoriesList.map(({ id, category }) => (
              <li key={id}>
                <span onClick={() => chooseCategory(category)}>{category}</span>
                <button type="button">Delete</button>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <LabelInput
              type={'text'}
              name={'category'}
              placeholder={'Введіть категорію'}
              value={category}
              onInput={onInput}
            />
            <button type="submit">ADD</button>
          </form>
        </Container>
      </Section>
    </>
  );
};
