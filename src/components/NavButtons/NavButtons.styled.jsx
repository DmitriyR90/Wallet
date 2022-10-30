import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  gap: 1rem;
`;

export const Button = styled(Link)`
  width: 40%;
  padding: 2.4rem 0;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.2rem;
  background: rgb(130, 116, 116);
  color: rgb(251, 251, 251);
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;
