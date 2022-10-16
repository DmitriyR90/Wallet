import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { LabelInput } from 'components/LabelInput/LabelInput';
import { Section } from 'components/Section/Section';
import { useState } from 'react';

export const Categories = ({ closeCategory }) => {
  const [category, setCategory] = useState('');

  const onInput = event => {
    setCategory(event.currentTarget.value);
  };

  return (
    <>
      <Header title={'Категорії'} onClick={closeCategory} />
      <Section>
        <Container>
          <ul>
            <li>
              <span>Title</span>
              <button type="button">Delete</button>
            </li>
          </ul>
          <form>
            <label>
              <LabelInput
                type={'text'}
                name={'category'}
                placeholder={'Введіть категорію'}
                value={category}
                onChange={onInput}
              />
            </label>
          </form>
        </Container>
      </Section>
    </>
  );
};
