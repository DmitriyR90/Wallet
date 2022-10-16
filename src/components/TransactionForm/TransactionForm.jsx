import { Form, ButtonForm } from './TransactionForm.styled';
import Container from './../Container/Container';
import { Section } from './../Section/Section';
import { LabelInput } from 'components/LabelInput/LabelInput';
import { useState } from 'react';
const initialState = {
  date: '',
  time: '',
  summ: '',
  currency: 'UAH',
  comment: '',
  transactionType: 'expense',
};

export const TransactionForm = ({ addTransaction }) => {
  const [form, setForm] = useState(initialState);

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addTransaction(form);
  };

  const { date, time, summ, currency, comment, transactionType } = form;

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit}>
          <LabelInput
            title={'Дохід'}
            type={'radio'}
            name={'transactionType'}
            value={'income'}
            onInput={handleInput}
            checked={'income' === transactionType}
          />
          <LabelInput
            title={'Витрати'}
            type={'radio'}
            name={'transactionType'}
            value={'expense'}
            onInput={this.handleInput}
            checked={'expense' === transactionType}
          />
          <LabelInput
            title={'Дата'}
            type={'date'}
            name={'date'}
            value={date}
            onInput={this.handleInput}
          />
          <LabelInput
            title={'Час'}
            type={'time'}
            name={'time'}
            value={time}
            onInput={this.handleInput}
          />
          <LabelInput
            title={'Сума'}
            type={'text'}
            name={'summ'}
            placeholder="Вкажіть суму"
            value={summ}
            onInput={this.handleInput}
          />
          <LabelInput
            title={'Валюта'}
            type={'button'}
            name={'currency'}
            value={currency}
            onInput={this.handleInput}
          />
          <LabelInput
            title={'Коментар'}
            type={'text'}
            name={'comment'}
            placeholder="Коментар..."
            value={comment}
            onInput={this.handleInput}
          />
          <ButtonForm type="submit">Додати</ButtonForm>
        </Form>
      </Container>
    </Section>
  );
};
