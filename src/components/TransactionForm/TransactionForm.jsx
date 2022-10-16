import { Form, ButtonForm } from './TransactionForm.styled';
import Container from './../Container/Container';
import { Section } from './../Section/Section';
import { LabelInput } from 'components/LabelInput/LabelInput';
import { Component } from 'react';

export class TransactionForm extends Component {
  state = {
    date: '',
    time: '',
    summ: '',
    currency: 'UAH',
    comment: '',
    transactionType: 'expense',
  };

  handleInput = ({ currentTarget }) => {
    const { setState } = this;

    const { name, value } = currentTarget;

    setState.call(this, { [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { date, time, summ, currency, comment, transactionType } = this.state;

    return (
      <Section>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <LabelInput
              title={'Дохід'}
              type={'radio'}
              name={'transactionType'}
              value={'income'}
              onInput={this.handleInput}
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
  }
}
