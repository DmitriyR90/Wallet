import { Form } from './TransactionForm.styled';
import Container from './../Container/Container';
import { Section } from './../Section/Section';
export const TransactionForm = () => {
  return (
    <Section>
      <Container>
        <Form>
          <label class="label">
            <span class="label-title">Дата</span>
            <input type="date" name="date" />
          </label>
          <label class="label">
            <span class="label-title">Час</span>
            <input type="time" name="time" />
          </label>
          <label class="label">
            <span class="label-title">Сума</span>
            <input type="text" name="summ" placeholder="Вкажіть суму" />
          </label>
          <label class="label">
            <span class="label-title">Валюта</span>
            <input type="button" name="currency" value="UAH" />
          </label>
          <label class="label">
            <span class="label-title">Коментар</span>
            <input type="text" name="text" placeholder="Коментар..." />
          </label>
          <button type="submit" class="btn-form">
            Додати
          </button>
        </Form>
      </Container>
    </Section>
  );
};
