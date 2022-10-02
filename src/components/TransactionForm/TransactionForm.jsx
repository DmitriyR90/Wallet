import { Form, ButtonForm } from './TransactionForm.styled';
import Container from './../Container/Container';
import { Section } from './../Section/Section';
import { LabelInput } from 'components/LabelInput/LabelInput';

export const TransactionForm = () => {
  return (
    <Section>
      <Container>
        <Form>
          <LabelInput title={'Дата'} type={'date'} name={'date'} />
          <LabelInput title={'Час'} type={'time'} name={'time'} />
          <LabelInput
            title={'Сума'}
            type={'text'}
            name={'summ'}
            placeholder="Вкажіть суму"
          />
          <LabelInput
            title={'Валюта'}
            type={'button'}
            name={'currency'}
            value="UAH"
          />
          <LabelInput
            title={'Коментар'}
            type={'text'}
            name={'comment'}
            placeholder="Коментар..."
          />
          <ButtonForm type="submit" class="btn-form">
            Додати
          </ButtonForm>
        </Form>
      </Container>
    </Section>
  );
};
