import { Section } from './../Section/Section';
import Container from './../Container/Container';
import { Button, Wrapper } from './NavButtons.styled';

export const NavButtons = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Button to="/history/expense">Всі витрати</Button>
          <Button to="/history/income">Всі доходи</Button>
        </Wrapper>
      </Container>
    </Section>
  );
};
