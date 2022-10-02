import { Section } from './../Section/Section';
import Container from './../Container/Container';
import { Button, Wrapper } from './NavButtons.styled';


export const NavButtons = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Button class="btn" type="button">
            Всі витрати
          </Button>
          <Button class="btn" type="button">
            Всі доходи
          </Button>
        </Wrapper>
      </Container>
    </Section>
  );
};
