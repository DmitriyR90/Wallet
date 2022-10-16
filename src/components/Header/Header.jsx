// import Header from './Header.styled';
import Container from '../Container/Container';

const Header = ({ title, onClick }) => {
  return (
    <header>
      <Container>
        {onClick && (
          <button type="button" onClick={onClick}>
            Повернутися
          </button>
        )}
        <h2>{title}</h2>
      </Container>
    </header>
  );
};

export default Header;
