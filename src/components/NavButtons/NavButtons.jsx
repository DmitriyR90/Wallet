import { Section } from './../Section/Section';
import Container from './../Container/Container';
import { Button, Wrapper } from './NavButtons.styled';


export const NavButtons = ({ changePage }) => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Button type="button" onClick={() => changePage("expense")}>
            Всі витрати
          </Button>
          <Button type="button" onClick={() => changePage("income")}>
            Всі доходи
          </Button>
        </Wrapper>
      </Container>
    </Section>
  );
};
