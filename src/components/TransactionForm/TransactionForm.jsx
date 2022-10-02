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
  };

  handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { date, time, summ, currency, comment } = this.state;

    return (
      <Section>
        <Container>
          <Form onSubmit={this.handleSubmit}>
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
