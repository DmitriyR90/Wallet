import { AuthForm } from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { registerUser } from './../redux/auth/authOperations';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const onFormSubmit = userData => {
    dispatch(registerUser(userData));
  };
  return (
    <>
      <h1>Register Page</h1>
      <AuthForm cbOnSubmit={onFormSubmit} buttonTitle={'Register'} />
    </>
  );
};
