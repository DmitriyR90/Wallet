import { useState } from 'react';

export const AuthForm = ({ cbOnSubmit, buttonTitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    cbOnSubmit({ email, password });
    setEmail('');
    setPasword('');
  };
  return (
    <form onSubmit={onFormSubmit}>
      <label>
        email
        <input
          type="text"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <label>
        password
        <input
          type="text"
          value={password}
          onChange={event => setPasword(event.target.value)}
        />
      </label>
      <button type="submit">{buttonTitle}</button>
    </form>
  );
};
