import { Form, ButtonForm } from './TransactionForm.styled';
import Container from './../Container/Container';
import { Section } from './../Section/Section';
import { LabelInput } from 'components/LabelInput/LabelInput';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  addExpenseTransaction,
  addIncomeTransaction,
} from 'redux/transactions/transactionsOperations';

const initialState = {
  date: '',
  time: '',
  summ: '',
  currency: 'UAH',
  comment: '',
  category: 'Різне',
};

export const TransactionForm = ({
  addTransaction,
  openCategory,
  newCategory,
}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(
    JSON.parse(localStorage.getItem('form')) ?? initialState
  );
  const navigate = useNavigate();
  const { transType } = useParams();

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    if (name === 'transType') {
      navigate(`/transaction/${value}`, { replace: true });
      return;
    }

    setForm(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTransaction);
    // addIncomeTransaction;
    // addExpenseTransaction;
    transType === 'income' &&
      dispatch(addIncomeTransaction({ ...form, transType }));
    transType === 'expense' &&
      dispatch(addExpenseTransaction({ ...form, transType }));
  };

  const { date, time, summ, currency, comment, category } = form;

  useEffect(() => {
    setForm(prevState => ({ ...prevState, category: newCategory }));
  }, [newCategory]);

  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(form));
  }, [form]);

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit}>
          <LabelInput
            title={'Дохід'}
            type={'radio'}
            name={'transType'}
            value={'income'}
            onInput={handleInput}
            checked={'income' === transType}
          />
          <LabelInput
            title={'Витрати'}
            type={'radio'}
            name={'transType'}
            value={'expense'}
            onInput={handleInput}
            checked={'expense' === transType}
          />
          <LabelInput
            title={'Дата'}
            type={'date'}
            name={'date'}
            value={date}
            onInput={handleInput}
          />
          <LabelInput
            title={'Час'}
            type={'time'}
            name={'time'}
            value={time}
            onInput={handleInput}
          />
          <LabelInput
            title={'Категорія'}
            type={'button'}
            name={'category'}
            value={category}
            onInput={handleInput}
            onClick={openCategory}
          />
          <LabelInput
            title={'Сума'}
            type={'text'}
            name={'summ'}
            placeholder="Вкажіть суму"
            value={summ}
            onInput={handleInput}
          />
          <LabelInput
            title={'Валюта'}
            type={'button'}
            name={'currency'}
            value={currency}
            onInput={handleInput}
          />
          <LabelInput
            title={'Коментар'}
            type={'text'}
            name={'comment'}
            placeholder="Коментар..."
            value={comment}
            onInput={handleInput}
          />
          <ButtonForm type="submit">Додати</ButtonForm>
        </Form>
      </Container>
    </Section>
  );
};
