import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid darkgray;
`;

export const Input = styled.input`
  border: none;
  font-size: 1.2rem;
  background: none;
  color: rgb(80, 78, 78);
  &:focus {
    outline: none;
  }
  &[type='button'] {
    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: rgb(147, 144, 144);
`;
